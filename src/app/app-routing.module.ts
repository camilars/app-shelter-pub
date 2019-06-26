import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './shelter/about/about.component';
import { EventComponent} from './shelter/event/event.component';
import { ReservationComponent} from './shelter/reservation/reservation.component';


const routes: Routes = [
  { path: '', redirectTo: '/shelter', pathMatch: 'full' },
  { path: 'shelter', loadChildren: './shelter/shelter.module#ShelterModule' },
  { path: 'about', component: AboutComponent},
  { path: 'event', component: EventComponent},
  { path: 'reservation', component: ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
