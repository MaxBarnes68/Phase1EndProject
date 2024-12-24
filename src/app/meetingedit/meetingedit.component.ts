import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Meeting } from '../model/meeting';
import { MeetinghttpService } from '../service/meetinghttp.service';
@Component({
  selector: 'app-meetingedit',
  standalone: false,
  
  templateUrl: './meetingedit.component.html',
  styleUrl: './meetingedit.component.css'
})
export class MeetingeditComponent {
  meeting: Meeting;

  constructor(private router: Router, private meetingService: MeetinghttpService){
      this.meeting = history.state;
  }

  editMeeting() {
    this.meetingService.updateMeeting(this.meeting).subscribe(resp => {
      console.log(resp);
      this.router.navigate([''])
    });
  }
}
