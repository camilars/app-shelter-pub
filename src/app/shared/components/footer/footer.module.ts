import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule
  ],
  exports: [
    CommonModule,
    FooterComponent
  ]
})
export class FooterModule { }
