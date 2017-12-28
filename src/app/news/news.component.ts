
import { Component, OnInit,TemplateRef,Input  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
  import { SessionService } from '../services/session.service';
import { LatestNews } from '../model/schoolMainData';
 
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
  
})
export class NewsComponent  implements OnInit {
  modalRef: BsModalRef;   
  @Input() news:  LatestNews[];
   message:string;
  constructor(private modalService: BsModalService , private sessionService:SessionService ) {      
  }
  ngOnInit() {
   console.log(this.news);
   this.sessionService.news = this.news;
   this.news=this.news.slice(0,3);
  }
  openModal(template: TemplateRef<any>, id :string) { 
    console.log(id);
    this.modalRef = this.modalService.show(template);     
  }


}
