import { Cliente } from './cliente';
import {Item} from './item';

export class Factura {

    id: number;
    tipo: string;
    fecha: Date;
    numero: number;
    puntoVenta: string;
    cliente: Cliente;
    total: number;
    items: Item[];

    public constructor(tipo:string,fecha:Date,numero:number, puntoVenta:string ,cliente:Cliente){
        this.id=0;
        this.total = 0;
        this.tipo = tipo;
        this.fecha = fecha;
        this.numero = numero;
        this.puntoVenta = puntoVenta;
        this.cliente = cliente;
        //this.calcularTotal();
    }

    calcularTotal(){
        
        this.items.forEach(item => {
            this.total = this.total + item.calcularTotal();
            console.log(item.calcularTotal());
        });
        return this.total;
    }
}
