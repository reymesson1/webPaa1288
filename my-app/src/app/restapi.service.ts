import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from  './hero';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  data : String = "";
  TOKEN_KEY = 'token';
  users: Master[] = [];
  details: Detail[] = [];

  constructor(private http:HttpClient,private router : Router) {}

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  logout(){
    localStorage.removeItem(this.TOKEN_KEY);
  }

  setLogin(event){ 

    this.http.post("http://localhost:8080/loading/",
    {
      "username": event.value.username,
      "password": event.value.password
    })
    .subscribe(
        (val) => {
          
            localStorage.setItem(this.TOKEN_KEY, val[0].token);
            
            if(this.isAuthenticated){

              this.router.navigateByUrl('/miscursos');    
            }
            console.log("POST call successful value returned in body",val);
          
        },
        response => {
          this.data=response;
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
    });

    return of(this.data);

  }

  getMaster(){

    this.http.get('http://localhost:8080/masters')
    .subscribe(
      (val) => {
          console.log("POST call successful value returned in body",val);

          val.map(res=>{
            this.users.push(res);
          })
                    
      },
      response => {
        this.data=response;
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
  });

  }

  addDetail(event,id){

    this.http.post("http://localhost:8080/adddetail/",
    {
      "id": id,
      "name": event.value.modulo, 
      "active": true,
      "created" : "",
      "creator": localStorage.token
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body",val);
        },
        response => {
          this.data=response;
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
  });
}

  addMaster(event){ 

    this.http.post("http://localhost:8080/addmaster/",
    {
      "name": event.value.modulo,
      "active": true,
      "creator": localStorage.token

    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body",val);
        },
        response => {
          this.data=response;
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
    });

    return of(this.data);

  }

  removeDetail(masterId, detailId){

    this.http.post("http://localhost:8080/removemaster/",
    {
      "masterid": masterId,
      "detailid": detailId,
      "creator": localStorage.token

    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body",val);
        },
        response => {
          this.data=response;
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
    });

    console.log(masterId + " " + detailId );
  }
  editDetail(event,masterId, detailId){

    this.http.post("http://localhost:8080/editdetail/",
    {
      "name": event.value.modulo,
      "masterid": masterId,
      "detailid": detailId,
      "creator": localStorage.token

    })
    .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",val);
        },
        response => {
          this.data=response;
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
    });

    console.log(masterId + " " + detailId );
  }

}

export interface Master {
  id: string;
  name: string;
  active: boolean;
  creator: string;
}
export interface Detail {
  id: string;
  name: string;
  creator: string;
}