import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/shared/home/home.component';
import {TravelComponent} from 'src/app/module/bazaar/travel/travel.component';
import {AcknowledgeComponent} from 'src/app/shared/acknowledge/acknowledge.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "travel", component: TravelComponent },
  { path: "travel/acknowledge", component: AcknowledgeComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
