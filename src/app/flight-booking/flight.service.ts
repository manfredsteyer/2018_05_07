import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { BASE_URL } from '../app.tokens';



@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient) { 
  }

  find(from: string, to: string): Observable<Flight[]> {
        // Spandau
        if (from === 'Fürth') {
          throw new Error('Airport not available');
        }
    
        let url = this.baseUrl + '/flight';
        
        // let params = new HttpParams().set('from', this.from).set('to', this.to);
        let params = { from: from, to: to };
    
        // let headers = new HttpHeaders().set('accept', 'application/json');
        let headers = { accept: 'application/json'};
    
        return this.http.get<Flight[]>(url, { params, headers });
  }
}
