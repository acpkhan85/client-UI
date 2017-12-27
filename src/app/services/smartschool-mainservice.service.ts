import { Injectable } from '@angular/core';
import {SchoolData} from '../model/schoolMainData';
import {Observable} from 'rxjs/Rx';
 import {Http ,Response} from '@angular/http';
 // Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 

@Injectable()
export class SmartschoolMainserviceService {

  constructor(private http : Http) { }


  getSmartSchoolData(schoolName:string):Observable<SchoolData>
  {
   let apiURL  = 'http://localhost:4353/api/SmartSchool';
   return this.http.get(apiURL)
   // ...and calling .json() on the response to return data
    .map((res:Response) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   
  }
}
