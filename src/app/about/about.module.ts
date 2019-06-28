import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    AboutComponent
  ]
})
export class AboutModule { }
