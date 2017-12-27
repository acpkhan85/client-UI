import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { LatestNews } from '../model/schoolMainData';

@Component({
  selector: 'app-eventandnews',
  templateUrl: './eventandnews.component.html',
  styleUrls: ['./eventandnews.component.css']
})
export class EventandnewsComponent implements OnInit {
    news: LatestNews[];
    msg:string;
  constructor(private sessionService: SessionService) {
  
  }

  ngOnInit() { 
    this.news = this.sessionService.news;
    console.log(this.news);
    this.msg='shreedhar deshwal';
  }

}
