import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Factura } from 'src/app/model/factura';
import { Cliente } from 'src/app/model/cliente';
import { Item } from 'src/app/model/item';
import {Producto} from 'src/app/model/producto';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent implements OnInit {

  unaFactura: Factura = {
    "id": 0,
    "tipo": "",
    "fecha": null,
    "numero": null,
    "puntoVenta": "Paraná",
    "cliente": {
      "id": 0,
      "nombre": "",
      "cuit": "",
      "direccion": ""
    },
    "total": 0,
    "items": null,
    "calcularTotal": null
  };
  cliente: Cliente = {
    "id": 0,
    "nombre": "",
    "cuit": "",
    "direccion": ""
  };

  producto: Producto = {
    "descripcion":"",
    "codigo":"",
    "id":0,
    "precioUnitario":0
  }
  listoAdd : boolean = false;
  items: Item[] = [];
  unItem : Item = new Item(null,null,"","",null,null);
  idItem: number = 0;
  constructor(private database: ServiceService) {
    this.database.getClientes();
    this.database.getProductos();
  }
  ngOnInit() {
    
  }
  cambiarCliente() {
    console.log(this.cliente.id);
    this.database.getClienteById(this.cliente.id).subscribe(
      data => { this.unaFactura.cliente = data }
    );;
  }
  addFactura() {
    if (this.unaFactura.tipo != '' && this.unaFactura.numero != null) {
      this.database.agregarFactura(new Factura(this.unaFactura.tipo, this.unaFactura.fecha, this.unaFactura.numero, this.unaFactura.puntoVenta, this.unaFactura.cliente, this.items))
      this.database.getClientes();
      this.unaFactura = {
        "id": 0,
        "tipo": "A",
        "fecha": null,
        "numero": 0,
        "puntoVenta": "",
        "cliente": null,
        "total": 0,
        "items": null,
        "calcularTotal": null
      };
    }
  }

  cambio(){
    this.listoAdd = false;
    this.producto = this.database.listadoProductos.find( p => p.codigo == this.unItem.codigo );
    if(this.producto != null)
    {
      this.unItem = new Item(this.idItem,this.unItem.cantidad,this.producto.codigo, this.producto.descripcion, this.unItem.iva, this.producto);
      this.unItem.precioUnitario = this.unItem.calcularTotal();
    }
    this.listoAdd = true; 
  }

  addItem(){
    if(this.listoAdd)
    {
      this.items.push(new Item(this.unItem.id,this.unItem.cantidad,this.unItem.codigo,this.unItem.descripcion,this.unItem.iva,this.unItem.producto));
      this.unaFactura.total = +this.unaFactura.total + +this.unItem.precioUnitario;
      console.log(this.unItem.id);
      this.idItem++;
      this.actualizarTotal();
    }
    console.log("");
  }

  eliminarItem(id: string){
    this.items.splice( parseInt(id),1);
    this.actualizarTotal()
  }

  actualizarTotal(){
    this.unaFactura.total = 0;
    this.items.forEach(x=> this.unaFactura.total = this.unaFactura.total +  x.calcularTotal())
  }


}
