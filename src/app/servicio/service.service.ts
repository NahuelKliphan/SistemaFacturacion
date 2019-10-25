import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  serverURL:string = 'http://localhost:3000';
  unCliente:Cliente;
  constructor(private http: HttpClient) { 
    
  }

    //Funciones cliente
    //get no se reconoce como metodo de http. excuse me?
    getCliente() {
      this.http.get<Cliente>(this.serverURL+'/clientes')
      .subscribe(
        (data) => {
          this.unCliente = data;
          return this.unCliente;
        }
      );
    }

    //Fin funnciones cliente
  
}
