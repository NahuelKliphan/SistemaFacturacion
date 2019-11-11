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

  editar : boolean = false ;

  constructor(private database: ServiceService) { }

  ngOnInit() {

  }
  addCliente() {
    if (this.unCliente.cuit != '' && this.unCliente.nombre != '')
    {
      if(this.editar)
      {
        this.database.actualizarCliente({
          "id":this.unCliente.id,
          "nombre":this.unCliente.nombre,
          "direccion":this.unCliente.direccion,
          "cuit":this.unCliente.cuit
        });
      }
      else
      {
        this.database.agregarCliente(new Cliente(
          this.unCliente.nombre,
          this.unCliente.direccion,
          this.unCliente.cuit));
      }

      this.editar = false;
      this.database.getClientes();
      this.unCliente = {
        "id":0,
        "nombre":"",
        "direccion":"",
        "cuit":""
      };
    } 
  }

  editarCliente(unCliente) {
    this.editar = true;
    this.unCliente = unCliente;
    console.log(unCliente);
  }
}
  


