import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/servicio/service.service'
import {Producto} from 'src/app/model/producto';
import {Cliente} from 'src/app/model/cliente';
import {Item} from 'src/app/model/item';
import {Factura} from 'src/app/model/factura';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  
  unCliente1 : Cliente = new Cliente('pepe','Su casa','10-1547899-32');
  unCliente2 : Cliente = new Cliente('roberto','Su casa','11-1547899-32');
  unCliente3 : Cliente = new Cliente('Jose Luis','Su casa','12-1547899-32');

  unProducto1 : Producto = new Producto('codigo','Descripcion',500);
  unProducto2 : Producto = new Producto('codigo','Descripcion',200);
  unProducto3 : Producto = new Producto('codigo','Descripcion',150);

 

  constructor(private _service: ServiceService) { }

  ngOnInit() 
  {
    
  }

  metodo(){

  }

}
