import { Injectable } from "@angular/core";
import { Employed } from '../interfaces/employed.Interface';

@Injectable({
    providedIn: 'root'
})
export class employedService {
    
    listEmployed: Employed[] = [];

    eliminarEmpleado(index: string) {
        this.listEmployed = this.listEmployed.filter(empleado => empleado.id !== index)
    }

    agregarEmpleado(empleado: Employed): void {
        this.listEmployed.push(empleado)
    }
}