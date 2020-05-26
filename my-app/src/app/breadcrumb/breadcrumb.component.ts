import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestapiService} from '../restapi.service';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor(public restapiservice : RestapiService, private router : Router) { }

  ngOnInit(): void {
  }

  goToHome(){

    this.router.navigateByUrl('/home');
  }

}
