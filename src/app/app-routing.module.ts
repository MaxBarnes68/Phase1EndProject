import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientformComponent } from './clientform/clientform.component';
import { ClienteditComponent } from './clientedit/clientedit.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingformComponent } from './meetingform/meetingform.component';
import { MeetingeditComponent } from './meetingedit/meetingedit.component';

const routes: Routes = [
  {path:'' ,redirectTo:'clientlist',pathMatch:'full'},
  { path: 'clientlist', component: ClientlistComponent },
  {path: 'clientform', component: ClientformComponent },
  {path: 'clientedit', component: ClienteditComponent},
  {path: 'meetinglist', component: MeetinglistComponent },
  {path:'meetingform', component: MeetingformComponent },
  {path:'meetingedit', component: MeetingeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
