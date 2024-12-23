import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../model/client';
import { ClienthttpService } from '../service/clienthttp.service';

@Component({
  selector: 'app-clientform',
  standalone: false,
  
  templateUrl: './clientform.component.html',
  styleUrl: './clientform.component.css'
})
export class ClientformComponent {
  client: Client;

  constructor(public clientService: ClienthttpService) {
    this.client = { cid: 1, name: '', email: '', phone: '', company: '' };
  }

  @Output()
  empadded: EventEmitter<Client> = new EventEmitter();

  saveClient() {
    console.log(this.client);

    this.clientService.addClient(this.client).subscribe(response => console.log(response));
  }
}
