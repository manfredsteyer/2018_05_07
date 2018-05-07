import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { filter, switchMap, merge, combineLatest, debounceTime, mergeMap, delay, distinct, share, tap, distinctUntilChanged } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Flight } from '../entities/flight';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  // Source
  control: FormControl = new FormControl();
  input$: Observable<string> = this.control.valueChanges;
  online$: Observable<boolean> = interval(2000).pipe(
    map(_ => Math.random() < 0.5),
    distinctUntilChanged(),
    share()
  );

  // Sink
  flights$: Observable<Flight[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    // --- B -- BE -- BER -- BERL
    this.flights$ = this.input$.pipe(
      filter(i => i.length >= 3),
      debounceTime(300),
      combineLatest(this.online$),
      map( combination => ({ input: combination[0], online: combination[1] })),
      filter(combi => combi.online),
      map(combi => combi.input),
      switchMap(input => this.load(input))
    );
  }

  load(airport: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = { from: airport };
    const headers = { 'Accept': 'application/json' };
    return this.http.get<Flight[]>(url, { params, headers});
  }

}
