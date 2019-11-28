import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/model/producto';
import { Cliente } from 'src/app/model/cliente';
import { Factura } from 'src/app/model/factura';
import { JsonPipe } from '@angular/common';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listadoProductos: Producto[] = [];
  listadoClientes: Cliente[] = [];
  listadoFacturas: Factura[] = [];
  listadoItems: Item[] = [];


  constructor(private _httpClient: HttpClient) { }


  //FUNCIONES PARA MANEJO DE PRODUCTOS
  getProductos() {
    this._httpClient.get<Producto[]>('http://localhost:4000/api/productos/')
      .subscribe(
        (data) =>  this.listadoProductos =  data 
      );
  }

  getProductoById(productoId: number) {
    return this._httpClient.get<Producto>(`http://localhost:4000/api/productos/${productoId}`)
  }

  agregarProducto(nuevoProducto: Producto) {
    return this._httpClient.post('http://localhost:4000/api/productos/', nuevoProducto).subscribe(data => {
        this.getProductos();
     });
  }

  borrarProducto(productoId: string) {
    return this._httpClient.delete(`http://localhost:4000/api/productos/${productoId}`).subscribe(
      () => this.getProductos()
    );
  }

  actualizarProducto(producto: Producto) {
    return this._httpClient.put(`http://localhost:4000/api/productos/${producto.id}`, producto)
    .subscribe(
      () => this.getProductos()
    );
  }


  //FUNCIONES PARA MANEJO DE CLIENTES
  getClientes() {
    this._httpClient.get<Cliente[]>('http://localhost:4000/api/clientes/')
      .subscribe(
        (data) => this.listadoClientes = data
      );
  }
  getClienteById(clienteId: number) {
    return this._httpClient.get<Cliente>(`http://localhost:4000/api/clientes/${clienteId}`)
  }
  agregarCliente(nuevoCliente: Cliente) {
    return this._httpClient.post('http://localhost:4000/api/clientes/', nuevoCliente)
      .subscribe(data => {
          this.getClientes();
      });
  }
  borrarCliente(clienteId: string) {
    return this._httpClient.delete(`http://localhost:4000/api/clientes/${clienteId}`)
    .subscribe(
      () => this.getClientes()
    );
  }

  actualizarCliente(cliente: Cliente) {
    return this._httpClient.put(`http://localhost:4000/api/clientes/${cliente.id}`, cliente)
    .subscribe(
      () => this.getClientes()
    );
  }

  //FUNCIONES PARA MANEJO DE FACTURAS

  getFacturas() {
    this._httpClient.get<Factura[]>('http://localhost:4000/api/facturas')
      .subscribe(
        (data) => this.listadoFacturas = data
      );
  }
  getFacturaById(facturaId: number) {
    return this._httpClient.get<Factura>(`http://localhost:4000/api/facturas/${facturaId}`)
  }
  agregarFactura(nuevaFactura: Factura) {
    return this._httpClient.post('http://localhost:4000/api/facturas/', nuevaFactura)
      .subscribe(data => {
          this.getFacturas();
      });
  }
  borrarFactura(facturaId: string) {
    return this._httpClient.delete(`http://localhost:4000/api/facturas/${facturaId}`)
    .subscribe(
      () => this.getFacturas()
    );
  }

  agregarItems(items: Item[]){
    items.forEach(aItem => {
      this._httpClient.post(`http://localhost:4000/api/items/`,aItem).subscribe(
        (data) => {
          console.log("Salio"+aItem);
          console.log(data);
        }
      )
    });
  }

  async getItems(id:number) {
    this._httpClient.get<Item[]>(`http://localhost:4000/api/items/${id}`)
      .subscribe(
        (data) => this.listadoItems = data
      );
  }
}
