import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { PlusComponent } from './plus.component';
import { MinusComponent } from './minus.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PlusComponent,
    MinusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
