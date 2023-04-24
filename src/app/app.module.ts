import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { counterModule } from './counter/counter.module';
import { PersonModule } from './persons/person.module';
import { EmployedModule } from './employed/employed.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    counterModule,
    PersonModule,
    EmployedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
