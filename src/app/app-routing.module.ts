import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/shelter', pathMatch: 'full' },
  { path: 'shelter', loadChildren: './shelter/shelter.module#ShelterModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'event', loadChildren: './event/event.module#EventModule' },
  { path: 'reservation', loadChildren:'./reservation/reservation.module#ReservationModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
