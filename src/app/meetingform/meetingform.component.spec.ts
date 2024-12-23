import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingformComponent } from './meetingform.component';

describe('MeetingformComponent', () => {
  let component: MeetingformComponent;
  let fixture: ComponentFixture<MeetingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
