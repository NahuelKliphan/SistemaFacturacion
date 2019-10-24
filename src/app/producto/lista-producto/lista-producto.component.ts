import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Producto} from 'src/app/model/producto';
import {ServiceService} from 'src/app/servicio/service.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {


  productoSeleccionado: Producto;

  @Output() productoEditado: EventEmitter<number> = new EventEmitter();

  constructor(private _service: ServiceService) {}

  ngOnInit() {
    this._service.getProductos();
  }

  obtenerProducto(productoId:number){
    this._service.getProductoById(productoId)
      .subscribe(
        (producto) => this.productoSeleccionado = producto
      )
  }

  borrarProducto(productoId:number) {
    this._service.borrarProducto(productoId)
      .subscribe(
        (response) => console.log('Se borro el producto ', response)
      )
  }

  editarProducto(productoId:number){
    this.productoEditado.emit(productoId);
  }

}
