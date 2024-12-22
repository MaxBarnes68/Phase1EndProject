import { Component } from '@angular/core';
import { clients } from '../model/client-data';

@Component({
  selector: 'app-clientlist',
  standalone: false,
  
  templateUrl: './clientlist.component.html',
  styleUrl: './clientlist.component.css'
})
export class ClientlistComponent {
  clients = clients;
}
