import { Component, Input } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'app-client',
  standalone: false,
  
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  @Input()
  client: Client
  constructor() {
    this.client = { cid: 0, name: '', email: '', phone: '', company: '' };
  }

}
