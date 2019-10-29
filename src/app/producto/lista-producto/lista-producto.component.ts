import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  busqueda: string = "";
  constructor(private database: ServiceService) { }

  ngOnInit() {
    this.database.getProductos();
  }

}
