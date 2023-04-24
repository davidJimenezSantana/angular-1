import { Component, Input } from "@angular/core";
import { employedService } from "../services/employed.service";
import { Employed } from '../interfaces/employed.Interface';

@Component({
    templateUrl : './EmployedPage.component.html',
    selector : 'app-employed'
})
export class EmployedPageComponent{   
   
    constructor(private empleadoServ:employedService){        
    }

    get employesList(): Employed[]{
        return this.empleadoServ.listEmployed;
    }

    agregarEmpleado(empleado:Employed){
        this.empleadoServ.agregarEmpleado(empleado);
    }
    
    elimianrEmpleado(id:string){
        this.empleadoServ.eliminarEmpleado(id);
    }
}