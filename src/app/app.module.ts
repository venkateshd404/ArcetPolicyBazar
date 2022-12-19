import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { TravelComponent } from './module/bazaar/travel/travel.component';
import { HealthComponent } from './module/bazaar/health/health.component';
import { VehicleComponent } from './module/bazaar/vehicle/vehicle.component';
import { AcknowledgeComponent } from './shared/acknowledge/acknowledge.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelComponent,
    HealthComponent,
    VehicleComponent,
    AcknowledgeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
