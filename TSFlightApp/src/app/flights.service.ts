import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
    {origin: "Miami", destination: "Chicago", flightnumber: 345, depart: new Date("2016-01-05T09:05:05.035Z"), arrive: new Date("2016-01-05T09:05:05.035Z"), nonstop: true},
    {origin: "New York", destination: "Los Angeles", flightnumber: 432, depart: new Date("2016-01-05T09:05:05.035Z"), arrive: new Date("2016-01-05T09:05:05.035Z"), nonstop: false},
  ];

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any> {
    return this.http.get('http://localhost:3000/flights');
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {
    
  }
}
