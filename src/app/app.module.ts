import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header/header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterModule } from './shared/components/footer/footer.module';
import { AboutModule } from './shelter/about/about.module';
import { EventModule } from './shelter/event/event.module';
import { ReservationModule } from './shelter/reservation/reservation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    AboutModule,
    EventModule,
    ReservationModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }