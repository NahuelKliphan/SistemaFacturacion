import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  unProducto: Producto = {
    "id": 0,
    "codigo": "",
    "descripcion": "",
    "precioUnitario": 0
  };
  constructor(private database: ServiceService) { }

  ngOnInit() {

  }

  addProducto() {
    if(this.unProducto.id !=0){
      this.database.agregarProducto(new Producto(
        this.unProducto.codigo,
        this.unProducto.descripcion,
        this.unProducto.precioUnitario));
      this.database.getProductos();
    }
    else
    {
      this.database.actualizarProducto(
        {
        "id": this.unProducto.id,
        "descripcion": this.unProducto.descripcion,
        "precioUnitario": this.unProducto.precioUnitario,
        "codigo":this.unProducto.codigo
      });
    }
    
  }

  editarProducto(unProducto) {
    this.unProducto = unProducto;
    console.log(unProducto);
  }

}
