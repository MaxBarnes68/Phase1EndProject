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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './service/auth.guard';

const routes: Routes = [
  {path:'' ,redirectTo:'clientlist',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'clientlist', component: ClientlistComponent },
  {path: 'clientform', component: ClientformComponent, canActivate:[authGuard]},
  {path: 'clientedit', component: ClienteditComponent, canActivate:[authGuard]},
  {path: 'meetinglist', component: MeetinglistComponent },
  {path:'meetingform', component: MeetingformComponent, canActivate:[authGuard]},
  {path:'meetingedit', component: MeetingeditComponent, canActivate:[authGuard]},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
