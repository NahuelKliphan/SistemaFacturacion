import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import {Producto} from 'src/app/model/producto';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  static listaItems: Item[];
  constructor() { }

  unProducto1 : Producto = new Producto('codigo','Descripcion',500);
  
  ngOnInit() {
  }

}
