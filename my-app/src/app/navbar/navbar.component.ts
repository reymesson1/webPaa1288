import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestapiService} from '../restapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public restapiservice : RestapiService, private router : Router) { }

  ngOnInit(): void {
  }

  logOff(){
    this.restapiservice.logout();
    this.router.navigateByUrl('/home');
  }

  viewCourse(){

    this.router.navigateByUrl('/profile');
  }

}
