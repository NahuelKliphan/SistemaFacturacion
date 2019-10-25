export class Cliente {

    id: number;
    nombre: string;
    direccion: string;
    cuit: string;
    public constructor (nombre:string,direccion:string,cuit:string){
        this.id = 0;
        this.nombre=nombre;
        this.direccion=direccion;
        this.cuit=cuit;
    }
}
