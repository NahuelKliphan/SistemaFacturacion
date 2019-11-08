import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/model/producto';
import { Cliente } from 'src/app/model/cliente';
import { Factura } from 'src/app/model/factura';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listadoProductos: Producto[] = [];
  listadoClientes: Cliente[] = [];
  listadoFacturas: Factura[] = [];

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
     });
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
    return this._httpClient.get<Cliente>(`http://localhost:3000/cliente/${clienteId}`)
  }
  agregarCliente(nuevoCliente: Cliente) {
    return this._httpClient.post('http://localhost:3000/Cliente', nuevoCliente)
      .subscribe(data => {
          this.getClientes();
      });
  }
  borrarCliente(clienteId: string) {
    return this._httpClient.delete(`http://localhost:3000/Cliente/${clienteId}`)
    .subscribe(
      () => this.getClientes()
    );
  }

  actualizarCliente(cliente: Cliente) {
    return this._httpClient.put(`http://localhost:3000/cliente/${cliente.id}`, cliente)
    .subscribe(
      () => this.getClientes()
    );
  }

  //FUNCIONES PARA MANEJO DE FACTURAS

  getFacturas() {
    this._httpClient.get<Factura[]>('http://localhost:3000/factura')
      .subscribe(
        (data) => this.listadoFacturas = data
      );
  }
  getFacturaById(facturaId: number) {
    return this._httpClient.get<Factura>(`http://localhost:3000/factura/${facturaId}`)
  }
  agregarFactura(nuevaFactura: Factura) {
    return this._httpClient.post('http://localhost:3000/factura', nuevaFactura)
      .subscribe(data => {
          this.getFacturas();
      });
  }
  borrarFactura(facturaId: string) {
    return this._httpClient.delete(`http://localhost:3000/factura/${facturaId}`)
    .subscribe(
      () => this.getFacturas()
    );
  }



}
