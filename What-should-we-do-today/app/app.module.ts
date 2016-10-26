import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { AppComponent }   from './app.component';
import {ToDoService} from './todo.service';

@NgModule({
  imports:      [ BrowserModule , HttpModule],
  declarations: [ AppComponent ],
  providers: [ToDoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
