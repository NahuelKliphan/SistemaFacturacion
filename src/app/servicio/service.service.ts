import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Producto} from 'src/app/model/producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listadoProductos: Producto[] = [];

  constructor(private _httpClient: HttpClient) { }

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

}
