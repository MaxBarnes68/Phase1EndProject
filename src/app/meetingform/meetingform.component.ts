import { Component, EventEmitter, Output } from '@angular/core';
import { Meeting } from '../model/meeting';
import { MeetinghttpService } from '../service/meetinghttp.service';

@Component({
  selector: 'app-meetingform',
  standalone: false,
  
  templateUrl: './meetingform.component.html',
  styleUrl: './meetingform.component.css'
})
export class MeetingformComponent {
  meeting: Meeting;

  constructor(public meetingService: MeetinghttpService) {
    this.meeting = { mid: 1, clientname: '', datetime: new Date(), agenda: '' };
  }

  @Output()
  empadded: EventEmitter<Meeting> = new EventEmitter();

  saveMeeting() {
    console.log(this.meeting);

    this.meetingService.addMeeting(this.meeting).subscribe((response: any) => console.log(response));
  }
}
