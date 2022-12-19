import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'POCApp';
  //read all Environment Variables
  ngOnInit() {
   this.setEnviornmentVariablesForLocalStorage();
   //console.log("IsBazaar = "+localStorage.getItem("IsBazaar"));
  }
   public setEnviornmentVariablesForLocalStorage()
   {
    localStorage.setItem("APPHostAddress",window["env"]["APPHostAddress"]);
    localStorage.setItem("APIHostAddress",window["env"]["APIHostAddress"]);
    localStorage.setItem("IsBazaar", window["env"]["IsBazaar"]);
    localStorage.setItem("CompanyId",window["env"]["CompanyId"]);
    
   }

}
