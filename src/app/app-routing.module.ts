import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/shelter', pathMatch: 'full' },
  { path: 'shelter', loadChildren: './shelter/shelter.module#ShelterModule' },
  { path: '**', redirectTo: 'shelter' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
