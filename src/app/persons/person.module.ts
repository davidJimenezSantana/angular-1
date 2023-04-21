import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { personComponent } from './person/person.component';
import { ListPersonsComponent } from "./list/list.component";

@NgModule({
    declarations:[
        personComponent,
        ListPersonsComponent
    ],
    exports:[
        personComponent,
        ListPersonsComponent     
    ],
    imports: [
        CommonModule
    ]
})
export class PersonModule{

}