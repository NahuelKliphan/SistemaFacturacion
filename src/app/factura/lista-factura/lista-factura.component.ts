import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Factura } from 'src/app/model/factura';
import { Item } from 'src/app/model/item';
import { async } from 'q';

@Component({
  selector: 'app-lista-factura',
  templateUrl: './lista-factura.component.html',
  styleUrls: ['./lista-factura.component.css']
})
export class ListaFacturaComponent implements OnInit {

  busqueda: string = "";
  unaFactura: Factura = {
    "id": 0,
    "tipo": "",
    "fecha": null,
    "numero": null,
    "puntoVenta": "Paraná",
    "cliente": null,
    "total": 0,
    "items": null,
    "calcularTotal": null
  };
  constructor(private database: ServiceService) {
    this.database.getFacturas();
  }

  ngOnInit() {

  }
  mostrar(unaFactura) {
    this.unaFactura = unaFactura;
    this.database.getItems(unaFactura.id);
    this.unaFactura.items = this.database.listadoItems;

  }
  eliminarFactura(id: string) {
    this.database.borrarFactura(id);
    this.database.getFacturas();
  }

}
