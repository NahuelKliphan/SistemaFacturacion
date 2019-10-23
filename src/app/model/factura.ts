import { Cliente } from './cliente';

export class Factura {

    id: number;
    tipo: string;
    fecha: Date;
    numero: number;
    puntoVenta: number;
    cliente: Cliente;
    total: number;
}
