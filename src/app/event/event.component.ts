        
import { Component, OnInit,Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import {  UpcomingEvent } from '../model/schoolMainData';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() events: UpcomingEvent[];
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
   console.log(this.events);
   
   this.sessionService.events = this.events;
   this.events = this.events.slice(0,3);
  }

}