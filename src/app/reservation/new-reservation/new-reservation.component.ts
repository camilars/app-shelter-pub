import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss']
})
export class NewReservationComponent implements OnInit {

  public reservation: any = {};
  public create: boolean;
  public msg: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  addReservation(reservation) {
    let localArrayReservations = [];
    reservation.id = Date.now();

    const localStringReservations = localStorage.getItem('ls-reservations');
    const list = JSON.parse(localStringReservations);
    if ( list && list.length > 0 ) {
      localArrayReservations = list;
    }

    localArrayReservations.push(reservation);

    const listaToString = JSON.stringify(localArrayReservations);
    localStorage.setItem('ls-reservations', listaToString);
    this._alertMessage(false, 'Created reservations.');
  }

  updateReservation(reservation) {

    const localStringReservations = localStorage.getItem('ls-reservations');
    const localArrayReservations = JSON.parse(localStringReservations);

    localArrayReservations.map(item => {
      if (item.id === reservation.id) {
        item = reservation;
      }
    });

    const listaToString = JSON.stringify(localArrayReservations);
    localStorage.setItem('ls-reservations', listaToString);
    this._alertMessage(false, 'Updated reservations.');
  }

  _alertMessage(isError, message) {
    if (isError) {
      this.msg = { error: true, message };
    } else {
      this.msg = { error: false, message };
    }
    setTimeout(() => {

      this.msg = {};

      if (isError === false) {
        this.router.navigate(['/', 'reservation']);
      }
    }, 3000);
  }

  _checkIfExistReservation(form) {

    const localStringReservations = localStorage.getItem('ls-reservations');
    const localArrayReservations = JSON.parse(localStringReservations);

    if (localArrayReservations) {
      const listFilter = localArrayReservations.filter(item => {
        if (item.data === form.data || item.hora === form.hora || item.id === form.id ) {
          return true;
        }
      });

      if (listFilter.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  _findReservationLocalStorage(id) {

    const localStringReservations = localStorage.getItem('ls-reservations');
    const localArrayReservations = JSON.parse(localStringReservations);

    const getReservation = localArrayReservations.filter(item => {
      if (item.id === id) {
        return true;
      }
    });
    if (getReservation.length > 0) {
      return getReservation[0];
    } else {
      return null;
    }
  }

  onSubmit(form: NgForm) {
    const { id, hora } = form.value;

    if (form.value.active === '') {
      form.value.active = false;
    }

    const check = this._checkIfExistReservation(form.value);

    if (this.create === false && id && hora ) {
      if (check === true) {
        this.updateReservation(form.value);
      } else {

        this._alertMessage(true, 'Reservation not found!');
      }
    } else {

      if (check === false) {
        this.addReservation(form.value);
      } else {

        this._alertMessage(true, 'Reservation really exist!');
      }
    }
  }

  ngOnInit() {

    const { id } = this.route.snapshot.params;

    if (id === 'new') {
      this.create = true;
    } else {
      const findReservation = this._findReservationLocalStorage( Number(id) );

      if (findReservation) {
        this.reservation = findReservation;
        this.create = false;
      } else {

        this.router.navigate(['/', 'reservations', 'newReservations']);
      }
    }

  }

}
