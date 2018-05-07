import { FLIGHT_BOOKNG_ROUTES } from './flight-booking.routes';
import { FlightService } from './flight.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FlightEditComponent } from './flight-edit/flight-edit.component';


@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild(FLIGHT_BOOKNG_ROUTES)
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        PassengerSearchComponent,
        FlightEditComponent
    ],
    providers: [
        // FlightService
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {

}