import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client/client.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientformComponent } from './clientform/clientform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClienteditComponent } from './clientedit/clientedit.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';
import { MeetingeditComponent } from './meetingedit/meetingedit.component';
import { MeetingformComponent } from './meetingform/meetingform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule } from '@angular/material/card';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    ClientlistComponent,
    ClientformComponent,
    ClienteditComponent,
    MeetingComponent,
    MeetinglistComponent,
    MeetingeditComponent,
    MeetingformComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
