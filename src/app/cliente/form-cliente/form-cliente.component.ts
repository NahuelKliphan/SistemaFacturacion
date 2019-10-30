import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  unCliente: Cliente = {
    "id": 0,
    "nombre": "",
    "cuit": "",
    "direccion": ""
  };
  constructor(private database: ServiceService) { }

  ngOnInit() {

  }

  addCliente() {
    if (this.unCliente.id != 0){
    this.database.agregarCliente(new Cliente(
      this.unCliente.nombre,
      this.unCliente.direccion,
      this.unCliente.cuit));
    this.database.getClientes();
    } else {
      this.database.actualizarCliente({
        "id":this.unCliente.id,
        "nombre":this.unCliente.nombre,
        "direccion":this.unCliente.direccion,
        "cuit":this.unCliente.cuit
      });
    }
  }

  editarCliente(unCliente) {
    this.unCliente = unCliente;
    console.log(unCliente);
  }

}
