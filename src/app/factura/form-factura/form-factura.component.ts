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
    "cliente": null,
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
  unItem : Item = new Item(null,null,"","",null,null,0);
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
      data => { this.cliente = data }
    );
  }
  addFactura() {
    if (this.unaFactura.tipo != '' && this.unaFactura.numero != null) {
      let factura: Factura = new Factura(this.unaFactura.tipo, this.unaFactura.fecha, this.unaFactura.numero, this.unaFactura.puntoVenta, this.cliente);
      factura.total = this.unaFactura.total;
      this.database.agregarFactura(factura)
      //agregar items por separado
      this.database.agregarItems(this.items);
      //
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
      this.unItem = new Item(this.idItem,this.unItem.cantidad,this.producto.codigo, this.producto.descripcion, this.unItem.iva, this.producto,1); //Este uno (1) esta para rellenar, apunta a el idfactura numero 1
      this.unItem.precioUnitario = this.unItem.calcularTotal();
    }
    this.listoAdd = true; 
  }

  addItem(){
    if(this.listoAdd)
    {

      let item: Item = new Item(this.unItem.id,this.unItem.cantidad,this.unItem.codigo,this.unItem.descripcion,this.unItem.iva,this.unItem.producto,1);
      item.precioUnitario = item.calcularTotal();
      item.subtotal = item.calcularSubtotal();

      this.items.push(item);
      this.unaFactura.total = +this.unaFactura.total + +this.unItem.precioUnitario;
      console.log(this.unItem.id);
      this.idItem++;
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
