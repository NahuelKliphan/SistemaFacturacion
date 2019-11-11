import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-lista-factura',
  templateUrl: './lista-factura.component.html',
  styleUrls: ['./lista-factura.component.css']
})
export class ListaFacturaComponent implements OnInit {

  busqueda: string = "";

  constructor(private database:ServiceService) { this.database.getFacturas(); }

  ngOnInit() {
    
  }
  
  eliminarFactura(id:string){
    this.database.borrarFactura(id);
    this.database.getFacturas();
  }

}
