import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { meetings } from '../model/meeting-data';
import { Meeting } from '../model/meeting';
import { MeetinghttpService } from '../service/meetinghttp.service';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: 'app-meetinglist',
  standalone: false,
  
  templateUrl: './meetinglist.component.html',
  styleUrl: './meetinglist.component.css'
})
export class MeetinglistComponent implements OnChanges {

  meetings = meetings;

   constructor(public meetingservice: MeetinghttpService, private router: Router, private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.meetingservice.getAllMeetings().subscribe((resp) => {
        console.log('fetched meetings');
        console.log(resp);
        this.meetings = resp;
      });
    }

    @Input() 
    newMeeting: any = {};

    ngOnChanges(changes: SimpleChanges): void {
      console.log(this.newMeeting);
          if (this.newMeeting !== undefined) this.meetings.unshift(this.newMeeting);
    }

    delete(meeting: Meeting) {
        this.meetingservice.deleteMeeting(meeting.mid).subscribe(response => console.log(response));
      }
    
      edit(meeting: Meeting) {
        // implement edit functionality here
        this.router.navigateByUrl('/meetingedit',{state: meeting});
      }
}
