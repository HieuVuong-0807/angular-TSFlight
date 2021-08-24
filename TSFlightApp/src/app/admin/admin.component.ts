import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  origin!: string;
  destination!: string;
  flightnumber!: number;
  depart!: Date;
  arrive!: Date;
  nonstop: boolean = false;

  flightList: Flight[] = [];

  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
    this.getAllFlight();
  }

  sendFlight() {
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      flightnumber: this.flightnumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }

    this.flightService.postFlight(flight);
  }

  toggleNonstop() {
    this.nonstop = !this.nonstop;
  }

  getAllFlight(): void {
    this.flightService.getFlights().subscribe(flights => this.flightList = flights);
  }

}
