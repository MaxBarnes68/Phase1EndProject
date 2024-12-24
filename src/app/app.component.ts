import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Client Management System';

  newclient: any;

  addClient(client: any) {
    this.newclient = client;
  }

  newmeeting: any;

  addMeeting(meeting: any) {
    this.newmeeting = meeting;
  }
}
