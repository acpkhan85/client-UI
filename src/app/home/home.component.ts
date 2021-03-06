import { Component, OnInit, TemplateRef } from '@angular/core'; 
import { SchoolData } from '../model/schoolMainData';
import { SmartschoolMainserviceService } from '../services/smartschool-mainservice.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ],

})
export class HomeComponent implements OnInit {
 message:string;
  schoolData: SchoolData;
  constructor(private _smartSchoolDataService: SmartschoolMainserviceService, private _sessionService:SessionService)   {
    
  }

  ngOnInit() {
 
    this._smartSchoolDataService.getSmartSchoolData("test")
    .subscribe(
    schoolData => {
      // console.log('this is response', schoolData);
      this.schoolData = schoolData
        , err => { console.log(err); }
      
       this._sessionService.staff = this.schoolData.staff;       
    }
    );
     
  }


}
