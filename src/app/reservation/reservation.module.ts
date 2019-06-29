import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReservationRoutingModule } from './reservation-routing.module';
import { NewReservationComponent } from './new-reservation/new-reservation.component';


@NgModule({
  declarations: [ReservationComponent, NewReservationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    FormsModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
