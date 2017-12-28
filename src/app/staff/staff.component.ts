import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Staff } from '../model/schoolMainData';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
staff:Staff[];
  constructor(private _sessionService:SessionService)   { 
    
  }

  ngOnInit() {
  this.staff = this._sessionService.staff;
  }

}
