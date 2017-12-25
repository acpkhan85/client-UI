import { Component, OnInit,TemplateRef  } from '@angular/core';
import {SmartschoolMainserviceService} from '../smartschool-mainservice.service';
import {SchoolData} from '../model/schoolMainData';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[SmartschoolMainserviceService]
  
})
export class HomeComponent implements OnInit {

  schoolData: SchoolData;
  modalRef: BsModalRef;

  constructor(private _smartSchoolDataService  : SmartschoolMainserviceService,private modalService: BsModalService) {

   }

  ngOnInit() {       
console.log('home');
this._smartSchoolDataService.getSmartSchoolData("test")
.subscribe(
  schoolData=>{
    console.log('this is response', schoolData); 
    this.schoolData = schoolData   
    ,err=>{console.log(err);}
    console.log('local varibale result',this.schoolData.banner);
  }
);
 
   }

   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
