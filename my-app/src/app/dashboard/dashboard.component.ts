import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/ngbd-modal-content';
import { NgbdModalContentDetail } from '../modal/ngbd-modal-content-detail';
import { NgbdModalContentEdit } from '../modal/ngbd-modal-content-edit';
import { RestapiService, Master } from '../restapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // users: Observable<any>
  users: Master[] = [];

  constructor(private modalService: NgbModal, public restapiservice : RestapiService) { }

  ngOnInit(): void {

    this.users = this.restapiservice.users;
    this.restapiservice.getMaster();
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  openDetail(id:String) {
    const modalRef = this.modalService.open(NgbdModalContentDetail);
    modalRef.componentInstance.name = id;
  }
  openEdit(id:String,detailId) {
    const modalRef = this.modalService.open(NgbdModalContentEdit);
    modalRef.componentInstance.name = id;
    modalRef.componentInstance.detailId = detailId;
  }
  removeDetail(masterId:String, detailId:String){
    
    this.restapiservice.removeDetail(masterId, detailId);
  }

}
