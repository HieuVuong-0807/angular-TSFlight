import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[] = [];
  selectedOrigin: string = "";
  selectedDestination: string = "";

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
  }

  getFlights():void  {
    this.flightsService.getFlights().subscribe(flights => {this.flights = flights as Flight[]});

  }

  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;
    this.flightsService.getFlightsTrip(origin, destination).subscribe(flights => {this.flights = flights as Flight[]})
  }

}
