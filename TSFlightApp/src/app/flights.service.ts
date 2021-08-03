import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
    {origin: "Miami", destination: "Chicago", flightNumber: 345, depart: new Date("2016-01-05T09:05:05.035Z"), arrive: new Date("2016-01-05T09:05:05.035Z"), nonstop: true},
    {origin: "New York", destination: "Los Angeles", flightNumber: 432, depart: new Date("2016-01-05T09:05:05.035Z"), arrive: new Date("2016-01-05T09:05:05.035Z"), nonstop: false},
  ];

  constructor() { }

  getFlights() {
    return this.flights;
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {
    
  }
}
