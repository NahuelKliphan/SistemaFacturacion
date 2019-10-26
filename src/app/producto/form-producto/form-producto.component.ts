import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import {ServiceService} from 'src/app/servicio/service.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  nuevoProducto : Producto = new Producto('','',0);
  edicion: boolean = false;
  
  constructor(private _service: ServiceService) { }

  ngOnInit() {
  }

  grabarProvincia(){
    if(this.edicion) {
      this._service.actualizarProducto(this.nuevoProducto)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevoProducto = new Producto('','',0);

          }
        )
    } else {
      this._service.agregarProducto(this.nuevoProducto)
        .subscribe(
          (response) => console.log('Se creo el producto: ', response)
        )
    }
  }

  editarProducto(productoId:number) {
    this._service.getProductoById(productoId)
      .subscribe(
        (producto) => {
          this.nuevoProducto = producto;
          this.edicion = true;
        }
      )
  }

}
