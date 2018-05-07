import { BASE_URL } from './../../app.tokens';
import { HttpClient } from '@angular/common/http';
import { FlightService } from "../flight.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "../../entities/flight";

@Injectable({
    providedIn: 'root',
    useClass: FlightService,
    deps: [BASE_URL, HttpClient]
  })
  export abstract class AbstractFlightService {
    abstract find(from: string, to: string): Observable<Flight[]>;
  }

