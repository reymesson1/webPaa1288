import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {RestapiService} from '../restapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public restapiservice : RestapiService, private router : Router) { }

  ngOnInit(): void {
    if(this.restapiservice.isAuthenticated){
      this.router.navigateByUrl('/miscursos');
    }
  }

  onSubmit(event){
    this.restapiservice.setLogin(event);    
  }


}
