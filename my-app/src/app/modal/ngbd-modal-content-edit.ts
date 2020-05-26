import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {RestapiService} from '../restapi.service';

@Component({
  selector: 'ngbd-modal-content-edit',
  templateUrl: './ngbd-modal-content-edit.html'
})

export class NgbdModalContentEdit {
  @Input() name;
  @Input() detailId;

  constructor(public restapiservice : RestapiService, private router : Router, public activeModal: NgbActiveModal) { }

  onSubmit(event){
    console.log(this.name + " " + this.detailId);
    console.log(event);
    this.restapiservice.editDetail(event, this.name, this.detailId);    
  }

}