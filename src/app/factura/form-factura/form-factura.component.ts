import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Factura } from 'src/app/model/factura';

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
    "cliente": null,
    "total": 0,
    "items": null,
    "calcularTotal" : null
  };

  constructor(private database:ServiceService) { }

  ngOnInit() {
    this.database.getClientes();
  }
}
