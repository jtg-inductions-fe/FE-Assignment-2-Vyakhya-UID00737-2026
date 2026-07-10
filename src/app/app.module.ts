import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './features/auth/login/login.component';
import { AddRestrauntComponent } from './features/restraunts/add-restraunt/add-restraunt.component';
import { EditRestrauntComponent } from './features/restraunts/edit-restraunt/edit-restraunt.component';
import { ListRestrauntComponent } from './features/restraunts/list-restraunt/list-restraunt.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddRestrauntComponent,
    EditRestrauntComponent,
    ListRestrauntComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
