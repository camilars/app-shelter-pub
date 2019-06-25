import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelterComponent } from './shelter.component';
import { ShelterRoutingModule } from './shelter-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShelterComponent],
  imports: [
    CommonModule,
    ShelterRoutingModule,
    FormsModule
  ]
})
export class ShelterModule { }
