export class Producto {

    id: number;
    codigo: string;
    descripcion: string;
    precioUnitario: number;

    constructor(codigo: string, descripcion:string, precioUnitario:number){
        this.id = 0;
        this.codigo=codigo;
        this.descripcion =descripcion;
        this.precioUnitario = precioUnitario;
    }
}
