import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClienthttpService {
  url:string = "http://localhost:3000/clients";

  constructor(private http:HttpClient) { } 
 
  getAllClients():Observable<any> 
  { 
    return this.http.get<any>(this.url); 
  } 
  getClientById(cid:number):Observable<Client> 
  { 
    return this.http.get<Client>(this.url+'/'+cid); 
  } 
  addClient(client:Client):Observable<Client> 
  { 
    client['id'] = client.cid; 
    return this.http.post<Client>(this.url, client); 
  } 
  updateClient(client:Client):Observable<Client> 
  { 
    return this.http.put<Client>(this.url+'/'+client.cid, client); 
  }

  deleteClient(cid:number){ 
    return this.http.delete(this.url+'/'+cid) 
  } 
}
