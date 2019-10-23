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

}
