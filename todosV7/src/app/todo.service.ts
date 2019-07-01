import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITodo } from './i-todo'
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  appUrl = environment.appUrl;
  constructor(private http:HttpClient) { }

  getAll() {
    const params = new HttpParams()
    .set('_sort','id')
    .set('_order','desc');

    return this.http.get<ITodo[]>(this.appUrl, { params });
  }

  create(todo:ITodo) {
    return this.http.post<ITodo[]>(this.appUrl, todo);
  }

  delete(id:number) {
    const removeUrl = `${this.appUrl}/${id}`;
    return this.http.delete<ITodo[]>(removeUrl);
  }

  deleteAll() {
    const deleteAllUrl = `${this.appUrl}/completed`;
    return this.http.delete<ITodo[]>(deleteAllUrl);
  }

  toggle(id:number, completed) {
    const toggleUrl = `${this.appUrl}/${id}`;
    return this.http.patch<ITodo[]>(toggleUrl, { completed });
  }

  toggleAll() {
    return this.http.patch<ITodo[]>(this.appUrl, { completed: true});
  }

}
