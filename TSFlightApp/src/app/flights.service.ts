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

  backEndUrl: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getFlights(): Observable<any> {
    return this.httpClient.get(`${this.backEndUrl}/flights`);
  }

  getFlightsTrip(orig: string, dest: string): Observable<any> {
    return this.httpClient.get(`${this.backEndUrl}/flights/query/${orig}/${dest}`);
  }

  postFlight(flight: Flight) {
    return this.httpClient.post(`${this.backEndUrl}/flights`, flight);

  }

  getAllOrigin(): Observable<any> {
    return this.httpClient.get(`${this.backEndUrl}/flights/cities/origin`);
  }

  getAllDestination(): Observable<any> {
    return this.httpClient.get(`${this.backEndUrl}/flights/cities/destination`);
  }

  deleteFlight(flight: Flight): Observable<any> {
    return this.httpClient.post(`${this.backEndUrl}/flights/${flight.id}/delete`, null);
  }

  updateFlight(flight: Flight): Observable<any> {
    return this.httpClient.post(`${this.backEndUrl}/flights/${flight.id}/update`, flight);
  }
}
