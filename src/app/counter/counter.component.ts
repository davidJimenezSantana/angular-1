import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    contador: number = 1;
    
    contar(param: boolean): void {
        if (param) {
            this.contador += 1;
        } else {
            this.contador -= 1;
        }
    }

    reset() {
        this.contador = 1;
    }
}