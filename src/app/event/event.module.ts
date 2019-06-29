import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    EventRoutingModule
  ],
  exports: [
    CommonModule,
    EventComponent
  ]
})
export class EventModule { }
