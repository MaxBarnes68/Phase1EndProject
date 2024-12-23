import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { clients } from '../model/client-data';
import { Client } from '../model/client';
import { ClienthttpService } from '../service/clienthttp.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-clientlist',
  standalone: false,
  
  templateUrl: './clientlist.component.html',
  styleUrl: './clientlist.component.css'
})
export class ClientlistComponent implements OnChanges {
  
  clients = clients;

  constructor(public clientservice: ClienthttpService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.clientservice.getAllClients().subscribe((resp) => {
      console.log('fetched clients');
      console.log(resp);
      this.clients = resp;
    });
  }

  @Input() 
  newClient: any = {};

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.newClient);
    if (this.newClient !== undefined) this.clients.unshift(this.newClient);
  }

  delete(client: Client) {
    this.clientservice.deleteClient(client.cid).subscribe(response => console.log(response));
  }

  edit(client: Client) {
    // implement edit functionality here
    this.router.navigateByUrl('/clientedit',{state: client});
  }

}
