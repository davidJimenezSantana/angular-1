import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employed } from '../../interfaces/employed.Interface';

@Component({
    selector : 'app-list-employed',
    templateUrl : 'listEmployed.component.html'
})
export class listEmployedComponent{

    @Output()
    eliminarEmpleado: EventEmitter<string> = new EventEmitter();

    @Input()
    listEmployed : Employed[] = [];

    eliminar(index : string): void{        
        this.eliminarEmpleado.emit(index);
    }

}