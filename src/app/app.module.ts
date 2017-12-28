import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';

import { HeadmasterComponent } from './headmaster/headmaster.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EventandnewsComponent } from './eventandnews/eventandnews.component';
import { ModalModule } from 'ngx-bootstrap';

import { SessionService } from './services/session.service'
import { SmartschoolMainserviceService } from './services/smartschool-mainservice.service'; 
import { StaffComponent } from './staff/staff.component';
import { AdmissionComponent } from './admission/admission.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    EventComponent,
    HeadmasterComponent,
    AboutusComponent,
    HomeComponent,
    FooterComponent,
    EventandnewsComponent, 
    StaffComponent, 
    AdmissionComponent, 
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot([ { path: 'home', component: HomeComponent }, 
    { path: 'aboutUs', component: AboutusComponent }, 
    { path: 'newsevent', component: EventandnewsComponent }, 
    { path: 'staff', component: StaffComponent }, 
    { path: 'admission', component: AdmissionComponent }, 
    { path: '**', redirectTo: 'home', pathMatch: 'full' } ]),ModalModule.forRoot()
  ],
  providers: [SessionService,SmartschoolMainserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
