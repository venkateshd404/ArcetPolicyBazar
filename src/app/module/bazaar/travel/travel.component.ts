import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTER } from "src/app/config/constants";
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  public IsBazaar:boolean=true;
  public CompanyId:Number=0;
  public activePage:string="Plan";
  public showPlan:boolean;
  public showTravel:boolean;
  public showPayment:boolean;
  public response:boolean=true;
 constructor(public router: Router) { }

 ngOnInit() {
   this.IsBazaar=Boolean(localStorage.getItem("IsBazaar"));
   this.CompanyId=Number(localStorage.getItem("CompanyId"));
   
debugger;
   if(this.IsBazaar)
   {
    //show all company plans 
    console.log("Bazaar");
    if(this.activePage!=undefined && this.activePage!=null && this.activePage!="")
    {
  this.showPlan=true;
  this.showTravel=false;
  this.showPayment=false;
    }
   }
   else if(!this.IsBazaar && this.CompanyId>0 &&this.CompanyId!=0)
   {
     // show only company plans
     console.log("Company");
   }
 }

 BuyNow()
 {
  this.showPlan=false;
  this.showTravel=true;
  this.showPayment=false;
 }
 Continue()
 {
  this.showPlan=false;
  this.showTravel=false;
  this.showPayment=true;
 }

 Proceed()
 {
  // prepare json data for sending to api

  if(this.response)
  {
    this.router.navigate([`${ROUTER.ACKNOWLEDGE}`]);
  }
 }

}
