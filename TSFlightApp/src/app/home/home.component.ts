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

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.getFlights();
    console.log(this.flights);
  }

  getFlights():void  {
    this.flightsService.getFlights().subscribe(flights => {this.flights = flights as Flight[]});

  }

}
