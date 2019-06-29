import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  public reservations: any = [];
  constructor() { }

  listReservation() {
    const localReservations = localStorage.getItem('ls-reservations');
    this.reservations = JSON.parse(localReservations);
  }

  

  ngOnInit() {
    this.listReservation();
  }

}
