import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  constructor(private database:ServiceService) { }

  ngOnInit() {
  }

}
