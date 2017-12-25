import { Component, OnInit,Input } from '@angular/core';
import {SchoolData} from '../model/schoolMainData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() banner: SchoolData;
  constructor() { }

  ngOnInit() {
    console.log('log banner object',this.banner);
    console.log('header');
  }

}
