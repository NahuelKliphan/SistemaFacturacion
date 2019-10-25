import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Producto} from 'src/app/model/producto';
import {Cliente} from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listadoProductos: Producto[] = [];
  listadoClientes: Cliente[] = [];

  constructor(private _httpClient: HttpClient) { }

  //Metodos para los productos con el servidor

  getProductos() {
    this._httpClient.get<Producto[]>('http://localhost:3000/producto')
      .subscribe(
        (data) => this.listadoProductos = data
      );
  }

  getProductoById(productoId:number) {
    return this._httpClient.get<Producto>(`http://localhost:3000/producto/${productoId}`)
  }

  agregarProducto(nuevoProducto:Producto) {
    return this._httpClient.post('http://localhost:3000/producto', nuevoProducto)
  }

  borrarProducto(productoId:number) {
    return this._httpClient.delete(`http://localhost:3000/producto/${productoId}`)
  }

  actualizarProducto(producto:Producto) {
    return this._httpClient.put(`http://localhost:3000/producto/${producto.id}`, producto)
  }




  //Metodos para los clientes con el servidor
  getClientes() {
    this._httpClient.get<Cliente[]>('http://localhost:3000/cliente')
      .subscribe(
        (data) => this.listadoClientes = data
      );
  }

  getClienteById(clienteId:number) {
    return this._httpClient.get<Cliente>(`http://localhost:3000/cliente/${clienteId}`);
  }

  agregarCliente(nuevoCliente:Cliente) {
    return this._httpClient.post('http://localhost:3000/Cliente', nuevoCliente)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

  borrarCliente(clienteId:number) {
    return this._httpClient.delete(`http://localhost:3000/Cliente/${clienteId}`);
  }

  actualizarCliente(cliente:Cliente) {
    return this._httpClient.put(`http://localhost:3000/cliente/${cliente.id}`, cliente);
  }

}
