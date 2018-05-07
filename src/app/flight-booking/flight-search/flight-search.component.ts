import { BASE_URL, FLIGHT_SERVICES } from './../../app.tokens';
import { FlightService } from './../flight.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AbstractFlightService } from './abstract.flight-service';


@Component({
  selector: 'flight-search',  // <flight-search></flight-search>
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  /*
  providers: [{ 
    provide: FlightService, 
    useFactory: (http: HttpClient, baseUrl: string) => new FlightService(baseUrl, http),
    deps: [HttpClient, BASE_URL]
  }]
  */
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  basket = {
    "3": true,
    "5": true
  };

  //private http: HttpClient;

  constructor(
    private flightService: AbstractFlightService,
    @Inject(FLIGHT_SERVICES) flightServices: FlightService[]
  ) { 
    //this.http = http;
    console.debug('FLIGHT_SERVICES', flightServices);
  }

  ngOnInit() {
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  search(): void {

    let o = this
      .flightService
      .find(this.from, this.to);

      o.subscribe();
      o.subscribe();
      o.subscribe(
          flights => { this.flights = flights; },
          err => { console.error('Error loading flights', err); }
      );
      
  }

}
