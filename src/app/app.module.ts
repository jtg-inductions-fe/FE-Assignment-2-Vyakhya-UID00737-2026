import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, DashboardComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
=======
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule
  ],
>>>>>>> de30a38 (VN_A2_01: button component added)
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
