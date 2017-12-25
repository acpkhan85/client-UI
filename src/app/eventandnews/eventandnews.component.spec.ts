import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventandnewsComponent } from './eventandnews.component';

describe('EventandnewsComponent', () => {
  let component: EventandnewsComponent;
  let fixture: ComponentFixture<EventandnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventandnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventandnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
