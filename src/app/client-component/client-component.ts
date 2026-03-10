import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-client-component',
  standalone: false,
  templateUrl: './client-component.html',
  styleUrl: './client-component.css',
})
export class ClientComponent {
  formGroupClient: FormGroup;
  clients: Client[] = [];

  constructor(private formBuilder: FormBuilder ) {

    this.formGroupClient = formBuilder.group({
      name: [''],
      age: [0],
      phone: [''],
    })
  }

  save() {
    const { name, age, phone } = this.formGroupClient.value;
    
    const payload = {
      id: Math.floor((Math.random() * 1000)),
      name,
      age,
      phone
    }

    this.clients.push(payload);

    this.formGroupClient.reset();

    alert(`
      Clientes salvos com sucesso
      Id: ${payload.id}
      Nome: ${name}
      Idade: ${age}
      Telefone: ${phone}
      `)
  }
}
