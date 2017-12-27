import { Component, OnInit,Input } from '@angular/core';
import {Banner} from '../model/schoolMainData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() banner: Banner;
  constructor() { }

  ngOnInit() {
    console.log('log banner object',this.banner); 
  }

}
