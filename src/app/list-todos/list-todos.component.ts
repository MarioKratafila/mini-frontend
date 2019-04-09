import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[];
  message: string;

  constructor(private todoDataService : TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo('mario', id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo with id ${id} deleted successfully!`;
        this.refreshTodos();
      },
      error => console.log(error)
    );
    
  }

  updateTodo(id) {
    console.log("update todo pressed", id)
    this.router.navigate(['todos', id]);    
  }

  addTodo() : void {
    this.router.navigate(['todos', -1]);    
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('mario').subscribe(
      response => {this.todos=response},
      error => console.log(error.error.message)
    );
  }

}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
  
}
