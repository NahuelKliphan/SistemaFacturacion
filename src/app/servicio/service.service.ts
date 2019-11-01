import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/model/producto';
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listadoProductos: Producto[] = [];
  listadoClientes: Cliente[] = [];

  constructor(private _httpClient: HttpClient) { }



  //FUNCIONES PARA MANEJO DE PRODUCTOS
  getProductos() {
    this._httpClient.get<Producto[]>('http://localhost:3000/producto')
      .subscribe(
        (data) => this.listadoProductos = data
      );
  }

  getProductoById(productoId: number) {
    return this._httpClient.get<Producto>(`http://localhost:3000/producto/${productoId}`)
  }

  agregarProducto(nuevoProducto: Producto) {
    return this._httpClient.post('http://localhost:3000/producto', nuevoProducto).subscribe(data => {
        this.getProductos();
     })
  }

  borrarProducto(productoId: string) {
    return this._httpClient.delete(`http://localhost:3000/producto/${productoId}`).subscribe(
      () => this.getProductos()
    );
  }

  actualizarProducto(producto: Producto) {
    return this._httpClient.put(`http://localhost:3000/producto/${producto.id}`, producto)
    .subscribe(
      () => this.getProductos()
    );
  }





  //FUNCIONES PARA MANEJO DE CLIENTES
  getClientes() {
    this._httpClient.get<Cliente[]>('http://localhost:3000/cliente')
      .subscribe(
        (data) => this.listadoClientes = data
      );
  }
  getClienteById(clienteId: number) {
    return this._httpClient.get<Cliente>(`http://localhost:3000/cliente/${clienteId}`);
  }
  agregarCliente(nuevoCliente: Cliente) {
    return this._httpClient.post('http://localhost:3000/Cliente', nuevoCliente)
      .subscribe();
  }
  borrarCliente(clienteId: string) {
    return this._httpClient.delete(`http://localhost:3000/Cliente/${clienteId}`)
    .subscribe();
  }

  actualizarCliente(cliente: Cliente) {
    return this._httpClient.put(`http://localhost:3000/cliente/${cliente.id}`, cliente)
    .subscribe();
  }

}
