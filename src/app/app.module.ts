import { APP_ROUTES } from './app.routes';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { BASE_URL, FLIGHT_SERVICES, AdvancedFlightService } from './app.tokens';
import { FlightService } from './flight-booking/flight.service';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityPipe } from './shared/pipes/city.pipe';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LookupComponent } from './lookup/lookup.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    LookupComponent,
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'},
    { provide: FLIGHT_SERVICES, useClass: FlightService, multi: true},
    { provide: FLIGHT_SERVICES, useClass: AdvancedFlightService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
,