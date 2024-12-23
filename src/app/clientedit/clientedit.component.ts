import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client';
import { ClienthttpService } from '../service/clienthttp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientedit',
  standalone: false,
  
  templateUrl: './clientedit.component.html',
  styleUrl: './clientedit.component.css'
})
export class ClienteditComponent {
  client: Client;

  constructor(private router: Router, private clientService: ClienthttpService){
    this.client = history.state;
  }

  editClient() {
    this.clientService.updateClient(this.client).subscribe(resp => {
      console.log(resp);
      this.router.navigate([''])
    });
  }
}
