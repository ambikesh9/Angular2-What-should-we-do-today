import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { ToDo }           from './todo';
import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/do';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ToDoService {
        constructor (private http: Http) {}
  private todoUrl = 'app/todo.json'; 
  
  getToDo (): Observable<ToDo[]> {
    return this.http.get(this.todoUrl)
                    .map((response:Response) => <ToDo[]>response.json())
                    .do(data=> console.log("All: "+ JSON.stringify(data)))
                    .catch(this.handleError);
  }
  
  private handleError (error: any) {
    
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
  }
    addToDo (work:string): Observable<ToDo> {
        let body= JSON.stringify({work});
        let headers=new Headers({'Content-Type': 'application/json'});
        let option= new RequestOptions({headers: headers});
        return this.http.post(this.todoUrl, body, option)
                    .map((response:Response)=> <ToDo[]>response.json())
                    .catch(this.handleError);
        
        }
    
}
