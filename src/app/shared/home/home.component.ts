import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTER } from "src/app/config/constants";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public IsBazaar:boolean=true;
   public CompanyId:Number=0;
   public AppHostAddress:string;
   public TravelHref:string;
  constructor(public router: Router) { }

  ngOnInit() {
    this.IsBazaar=Boolean(localStorage.getItem("IsBazaar"));
    this.CompanyId=Number(localStorage.getItem("CompanyId"));
    this.AppHostAddress=localStorage.getItem("APPHostAddress");
    this.TravelHref= this.AppHostAddress+ROUTER.TRAVEL;
  }
  VehicleInsurance()
  {

  }

  TravelInsurance()
  {
    this.router.navigate([`${ROUTER.TRAVEL}`]);
  }

  HealthInsurance()
  {

  }
}
