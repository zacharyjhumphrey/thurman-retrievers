import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CtaComponent } from './components/cta/cta.component';
import { SelectDogSectionComponent } from './components/select-dog-section/select-dog-section.component';
import { ViewDogCardComponent } from './components/view-dog-card/view-dog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CtaComponent,
    SelectDogSectionComponent,
    ViewDogCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
