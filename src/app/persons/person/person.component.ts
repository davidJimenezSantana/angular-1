import { Component } from "@angular/core";


@Component({
    templateUrl: './person.component.html',
    selector: 'app-person',
    styleUrls: ['./person.component.css'],    
})
export class personComponent {
    titlePerson: string = "Modulo de persona"

    nombre: string = "Ernesto";
    apellido: string = "Perez";
    correo: string = "eperez@correo.com";
    edad: number = 15;

    setNombre() {
        this.nombre = 'David';
    }

    setApellido() {
        this.apellido = 'Alejandro';
    }

     setCorreo() {
        this.correo = 'david@correo';
    }

    setEdad() {
        this.edad = 40;
    }

    reset(){
        this.nombre = "Ernesto";
        this.apellido = "Perez";
        this.correo = "eperez@correo.com";
        this.edad = 15;
    }

    
}