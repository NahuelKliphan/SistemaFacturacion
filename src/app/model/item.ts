import { Producto } from './producto';

export class Item {
    
    id: number;
    cantidad: number;
    codigo: string;
    descripcion: string;
    precioUnitario: number;
    iva: number;
    subtotal: number;
    producto: Producto;

    public constructor(cantidad:number, codigo:string, descripcion:string, iva:number,producto:Producto){

        this.id= 0;
        this.cantidad = cantidad;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.iva = iva;
        this.producto = producto;
        this.subtotal =null;
        this.precioUnitario = null;

    }

    calcularSubtotal(){
       return this.subtotal = this.cantidad * this.producto.precioUnitario;
    }

    calcularTotal(){
        
        this.calcularSubtotal();
        return this.precioUnitario = this.subtotal + (this.subtotal*this.iva)/100;
    }

}
