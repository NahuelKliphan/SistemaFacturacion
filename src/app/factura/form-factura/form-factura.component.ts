import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Factura } from 'src/app/model/factura';
import { Cliente } from 'src/app/model/cliente';
import { Item } from 'src/app/model/item';
import {Producto} from 'src/app/model/producto';

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
    "puntoVenta": "Paraná",
    "cliente": null,
    "total": 0,
    "items": null,
    "calcularTotal": null
  };
  cliente: Cliente = {
    "id": 0,
    "nombre": "",
    "cuit": "",
    "direccion": ""
  };
  items: Item[] = [];
  unItem : Item = new Item(null,"","",null,null);
  constructor(private database: ServiceService) {
    this.database.getClientes();
  }
  ngOnInit() {
  }
  cambiarCliente() {
    console.log(this.cliente.id);
    this.database.getClienteById(this.cliente.id).subscribe(
      data => { this.unaFactura.cliente = data }
    );;
  }
  addFactura() {
    if (this.unaFactura.tipo != '' && this.unaFactura.numero != null) {
      this.database.agregarFactura(new Factura(this.unaFactura.tipo, this.unaFactura.fecha, this.unaFactura.numero, this.unaFactura.puntoVenta, this.unaFactura.cliente, this.unaFactura.items))
      this.database.getClientes();
      this.unaFactura = {
        "id": 0,
        "tipo": "A",
        "fecha": null,
        "numero": 9,
        "puntoVenta": "Paraná",
        "cliente": null,
        "total": 0,
        "items": null,
        "calcularTotal": null
      };
    }
  }
}
