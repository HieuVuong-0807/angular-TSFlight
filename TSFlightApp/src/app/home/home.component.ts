import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  filteredOriginList: any[] = [];
  filteredDestinationList: any[] = [];
  

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.getOriginList();
    this.getDestinationList();
  }

  getFlights():void  {
    this.flightsService.getFlights().subscribe(flights => {this.flights = flights as Flight[]});

  }

  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;
    this.flightsService.getFlightsTrip(origin, destination).subscribe(flights => {this.flights = flights as Flight[]})
  }

  getOriginList(): void {
    this.flightsService.getAllOrigin().subscribe(origin => this.filteredOriginList = origin);
  }

  getDestinationList(): void {
    this.flightsService.getAllDestination().subscribe(destination => this.filteredDestinationList = destination);
  }


}
