import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTER } from "src/app/config/constants";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  backToHome()
  {
    debugger;
    this.router.navigate([`${ROUTER.HOME}`]);
  }
}
