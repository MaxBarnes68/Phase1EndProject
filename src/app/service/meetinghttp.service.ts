import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from '../model/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetinghttpService {
  url:string = "http://localhost:3000/meetings";
  
    constructor(private http:HttpClient) { } 
   
    getAllMeetings():Observable<any> 
    { 
      return this.http.get<any>(this.url); 
    } 
    getMeetingById(mid:number):Observable<Meeting> 
    { 
      return this.http.get<Meeting>(this.url+'/'+mid); 
    } 
    addMeeting(meeting:Meeting):Observable<Meeting> 
    { 
      meeting['id'] = meeting.mid; 
      return this.http.post<Meeting>(this.url, meeting); 
    } 
    updateMeeting(meeting:Meeting):Observable<Meeting> 
    { 
      return this.http.put<Meeting>(this.url+'/'+meeting.mid, meeting); 
    }
  
    deleteMeeting(mid:number){ 
      return this.http.delete(this.url+'/'+mid) 
    } 
}
