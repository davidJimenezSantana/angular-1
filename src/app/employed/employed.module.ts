import { NgModule } from "@angular/core";
import { EmployedPageComponent } from "./pages/employedPage.component";
import { listEmployedComponent } from './components/listarEspleados/listEmployed.component';
import { addEmployedComponent } from './components/agregarEmpleados/addEmployed.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations : [
        EmployedPageComponent,
        listEmployedComponent,
        addEmployedComponent
    ],
    exports : [
        EmployedPageComponent
    ],
    imports: [CommonModule,
    FormsModule],
})
export class EmployedModule{

}