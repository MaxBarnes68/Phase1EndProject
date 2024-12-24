import { Component, Input } from '@angular/core';
import { Meeting } from '../model/meeting';

@Component({
  selector: 'app-meeting',
  standalone: false,
  
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {
  @Input()
  meeting: Meeting
  constructor() {
    this.meeting = { mid: 0, clientname: '', datetime: new Date(), agenda: '' };
  }
}

