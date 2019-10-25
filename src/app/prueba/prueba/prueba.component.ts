import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/servicio/service.service'
import {Producto} from 'src/app/model/producto';
import {Cliente} from 'src/app/model/cliente';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(private _service: ServiceService) { }

  //sunCliente : Cliente = new Cliente();

  ngOnInit() 
  {
    

  }

  metodo(){

    

  }

}
