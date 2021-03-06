import { Injectable } from '@angular/core';
import { SchoolData, LatestNews, UpcomingEvent, Staff } from '../model/schoolMainData'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 



@Injectable()
export class SessionService {

private _name: string;
private _latestNews : LatestNews[]; 
private _upcomingEvent : UpcomingEvent[]; 
private _staff: Staff[];
schoolData: SchoolData;

private messageSource = new BehaviorSubject<string>("default message");
currentMessage =  this.messageSource.asObservable();
constructor( ) { 
 }
 
//set and get property for singleton service
get news():LatestNews[] {
  return this._latestNews;
}

set news(news:LatestNews[]) {
  this._latestNews = news;
}


get events():UpcomingEvent[] {
  return this._upcomingEvent;
}

set events(events:UpcomingEvent[]) {
  this._upcomingEvent = events;
}

get staff():Staff[] {
  return this._staff;
}

set staff(staff:Staff[]) {
  this._staff = staff;
}
}
