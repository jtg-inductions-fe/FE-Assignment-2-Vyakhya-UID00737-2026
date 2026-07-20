import { Component } from '@angular/core';
import { ValidationErrors, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestaurantService } from '@core/services/restaurant.service';
import { RESTAURANT_FORM_ERROR, EMAIL_ERROR } from '@shared/constants/error.constants';
import { listRestaurant } from '@shared/constants/path.constants';
import { RestaurantList } from '@shared/models/restaurant.models';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss'],
})
export class RestaurantFormComponent {
  private subscription?: Subscription;
  restaurantData: RestaurantList | null = null;
  error = '';
  currentPage = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
  ) {}

  restaurantForm = new FormGroup({
    restaurantName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl<string[] | null>([], [Validators.required, this.validateEmailList]),
  });

  formErrors = RESTAURANT_FORM_ERROR;
  emailErrors = EMAIL_ERROR;

  ngOnInit(): void {
    this.currentPage = this.isEditPage();

    if (this.currentPage) {
      const id = this.route.snapshot.params['id'];
      if (id) {
        this.getEditData(id);
      }
    }
  }

  getEditData(id: string): void {
    this.subscription = this.restaurantService.getRestaurantById(id).subscribe(restaurant => {
      if (restaurant) {
        this.restaurantData = restaurant;
        this.restaurantForm.patchValue({
          restaurantName: restaurant.restaurantName,
          address: restaurant.address,
          email: restaurant.owners || [],
        });
      }
    });
  }

  get restaurantNameControl(): FormControl {
    return this.restaurantForm.get('restaurantName') as FormControl;
  }

  get addressControl(): FormControl {
    return this.restaurantForm.get('address') as FormControl;
  }

  get emailControl(): FormControl {
    return this.restaurantForm.get('email') as FormControl;
  }

  isEditPage(): boolean {
    return !!this.route.snapshot.paramMap.get('id');
  }

  validateEmailList(control: AbstractControl): ValidationErrors | null {
    const emails = (control.value as string[]) || null;
    if (!emails || emails.length === 0) {
      return null;
    }

    const hasInvalidEmail = emails.some(email => {
      const emailControl = new FormControl(email, Validators.email);
      return emailControl.hasError('email');
    });

    return hasInvalidEmail ? { email: true } : null;
  }

  onSubmit(): void {
    this.error = '';
    if (this.restaurantForm.invalid) {
      this.restaurantForm.markAllAsTouched();
      return;
    }

    const loadRestaurant: Omit<RestaurantList, 'id'> = {
      restaurantName: this.restaurantForm.value.restaurantName || '',
      address: this.restaurantForm.value.address || '',
      owners: this.restaurantForm.value.email || [],
    };

    if (this.currentPage && this.restaurantData) {
      this.restaurantService.updateRestaurantData({ ...loadRestaurant, id: this.restaurantData.id });
    } else {
      this.restaurantService.addRestaurantData(loadRestaurant);
    }

    this.router.navigate([listRestaurant]);
  }

  onBackClick(): void {
    this.router.navigate([listRestaurant]);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
