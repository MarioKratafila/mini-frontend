import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`/api/users/${username}/todos`);
  }

  deleteTodo(username: string, id: any) {
    return this.http.delete(`/api/users/${username}/todos/${id}`);
  }

  getTodoById(username: string, id: number) {
    return this.http.get<Todo>(`/api/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put<Todo>(`/api/users/${username}/todos/${id}`,todo);
  }

  createTodo(username: string, todo: Todo) {
    return this.http.post<Todo>(`/api/users/${username}/todos`,todo);
  }


}
