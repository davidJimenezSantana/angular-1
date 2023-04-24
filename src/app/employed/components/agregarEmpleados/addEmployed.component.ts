import { Component, EventEmitter, Output } from "@angular/core";
import { Employed } from '../../interfaces/employed.Interface';
import { v4 as idAuto } from 'uuid';

@Component({
    selector: 'app-add-employed',
    templateUrl: 'addEmployed.component.html'
})
export class addEmployedComponent {

    @Output()
    public nuevoEmpleado: EventEmitter<Employed> = new EventEmitter();

    employed: Employed = {
        id: '',
        name: '',
        identificacion: 0,
    }

    public agregarEmpleado(): void {
        if (this.employed.name === '' || this.employed.identificacion === 0) {
            console.log("datos vacios")
            return;
        }
        this.employed.id = idAuto();
        this.nuevoEmpleado.emit(this.employed);
        this.employed = {id: '',name: "", identificacion:0};
        
    }

}