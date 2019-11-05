import { Component, EventEmitter,Output, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  busqueda: string = "";
  constructor(private database: ServiceService) { }
  @Output() clienteAmodificar = new EventEmitter();
  ngOnInit() {
    this.database.getClientes();
  }
  eliminarCliente(id:string){
    this.database.borrarCliente(id);
    this.database.getClientes();
  }

  solicitarModificacion(unCliente:Cliente){
    console.log(" away");
    this.clienteAmodificar.emit(unCliente); //eto no anda que sad la wea
  }

}
