import { Component, OnInit } from '@angular/core';
import {ToDo} from './todo';
import {ToDoService} from './todo.service';
@Component({
  selector: 'my-todo',
  template: `
<div style="text-align:center;">
<h1> What you want to do Today....!!</h1>
<input #newToDoName>
<button (click)="addToDo(newToDoName.value); newToDoName.value=''">
Add
</button>
<br>
<table class="hovertable" align="center">
    <tr>
        <th> My Work...</th>
        
        
    </tr>

    <tr *ngFor="let x of todo">
        <td> {{x.work}} <div style="float:right;">
        <button (click)="deleteToDo(x)">
        Remove 
        </button></div>
        </td>
    </tr>


</table>
</div>
`
})
export class AppComponent implements OnInit
{ 
    todo:ToDo[];
    errorMessage: string;
    
    constructor (private todoService: ToDoService) {}
getToDo() {
    this.todoService.getToDo()
                     .subscribe(
                       todo => this.todo = todo,
                       error =>  this.errorMessage = <any>error);
  }
    
    addToDo(todoName: string) {
        if(!todoName){return;}
        this.todo.push({"work": todoName});
        }
    
    deleteToDo(todoName: ToDo){
    this.todo.splice(this.todo.indexOf(todoName),1);    
    }
    
    ngOnInit() { this.getToDo(); }

}
