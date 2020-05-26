import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {RestapiService} from '../restapi.service';

@Component({
  selector: 'ngbd-modal-content-detail',
  templateUrl: './ngbd-modal-content-detail.html'
})

export class NgbdModalContentDetail {
  @Input() name;

  constructor(public restapiservice : RestapiService, private router : Router, public activeModal: NgbActiveModal) { }

  onSubmit(event){
    console.log(this.name);
    this.restapiservice.addDetail(event, this.name);    
  }

}