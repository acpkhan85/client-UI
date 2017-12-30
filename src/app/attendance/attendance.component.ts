import { Component, OnInit, TemplateRef } from '@angular/core';
 
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Attendance } from '../model/schoolMainData';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  modalRef: BsModalRef;
  numbers: string[] = [];
  numbers1: string[] = [];
  months: Number[] = [];
  attendance: Attendance[]=[];
  studentAttendace:Attendance[]=[];

  constructor(private modalService: BsModalService) {
   var a=new Attendance();
    a.leaveType = 2;
    a.date = '24';
    var a1=new Attendance();
    a1.leaveType = 1;
    a1.date = '27';

    this.studentAttendace.push(a1);
    this.studentAttendace.push(a);
  }

  ngOnInit() {

    for (let i: number = 1; i < 28; i++){ 
      if (i < 10) {
        this.numbers[i] = "0" + i.toString();
        var a = new Attendance();
        a.leaveType =0;    
        a.date= "0" + i.toString();
        this.attendance.push(a);
      }
      else {
        this.numbers[i] = i.toString();
        a.leaveType =1;
        a.date=  i.toString();
        this.attendance.push(a);
      }
    }

    console.log(this.studentAttendace);

    for (let s of this.studentAttendace) {
       let position :Number = Number(s.date)-1 ;
       this.attendance[position.toString()]=s;
              
  }  

    for (let i: number = 0; i < 3; i++) {
      this.months[i] = i + 1; 
    }
  }

  rowClick(event: any) {
   
  }

  openModal(template: TemplateRef<any>, event: any) {
    
    this.modalRef = this.modalService.show(template);
  }
}
