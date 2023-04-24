import { Component } from '@angular/core';
@Component({
    selector: 'app-persons-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListPersonsComponent {
    lista: string[] = ["Primera Persona", "Segunda Persona", "Tercera Persona", "Cuarta Persona", "Quinta Persona"];
    personDelete?: string;    
    long : number = this.lista.length;
    

    deletePerson() {
        this.personDelete = this.lista.pop();
        this.long = this.lista.length;
    }

}