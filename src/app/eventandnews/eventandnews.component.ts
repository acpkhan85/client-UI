import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { UpcomingEvent, LatestNews } from '../model/schoolMainData';

@Component({
  selector: 'app-eventandnews',
  templateUrl: './eventandnews.component.html',
  styleUrls: ['./eventandnews.component.css']
})
export class EventandnewsComponent implements OnInit {
    latestEvent: UpcomingEvent[];
    news:LatestNews[];
    msg:string;  
    heroes: string[];
  constructor(private sessionService: SessionService) {
  
  }

  ngOnInit() { 
    this.latestEvent = this.sessionService.events;
     this.news = this.sessionService.news;
  }

}
