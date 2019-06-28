import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    ReservationComponent
  ]
})
export class ReservationModule { }
