import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';


const routes: Routes = [
  { path: '', component: ReservationComponent},
  { path: 'newReservation', component: NewReservationComponent},
  { path: ':id', component: NewReservationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
