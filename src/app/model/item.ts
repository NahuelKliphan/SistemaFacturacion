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
    facturaId: number;
    public constructor(id:number, cantidad:number, codigo:string, descripcion:string, iva:number,producto:Producto,facturaId:number){

        this.id= id;
        this.cantidad = cantidad;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.iva = iva;
        this.producto = producto;
        this.subtotal =null;
        this.precioUnitario = null;
        this.facturaId=facturaId;
    }

    calcularSubtotal(){
       return this.subtotal = this.cantidad * this.producto.precioUnitario;
    }

    calcularTotal(){
        
        this.calcularSubtotal();
        return this.precioUnitario = this.subtotal + (this.subtotal*this.iva)/100;
    }

}
