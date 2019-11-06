import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Factura } from 'src/app/model/factura';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent implements OnInit {

  unaFactura: Factura = {
    "id": 0,
    "tipo": "A",
    "fecha": null,
    "numero": 9,
    "puntoVenta": 0,
    "clienteID": null,
    "total": 0,
    "items": null,
    "calcularTotal" : null
  };
  cliente: Cliente = {
    "id": 0,
    "nombre": "",
    "cuit": "",
    "direccion": ""
  };
  constructor(private database:ServiceService) {

    this.database.getClientes();
   }

  ngOnInit() {
  }

  cambiarCliente(){
    console.log(this.cliente.id);
    this.database.getClienteById(this.cliente.id).subscribe(
      data => {  this.unaFactura.clienteID = data }
    );;
  }
}
