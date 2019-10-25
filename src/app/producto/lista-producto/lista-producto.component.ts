import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  constructor(private database:ServiceService) { }

  ngOnInit() {
  }

}
