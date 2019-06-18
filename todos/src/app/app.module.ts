import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TodosComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
