import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[];
  // = [
   // new Todo(1, 'Learn to Dance', false, new Date()),
   // new Todo(2, 'Become an Expert at Spring', false, new Date()),
   // new Todo(3, 'Visit USA', false, new Date())
   // {id:1,description:'Learn to Dance'},
   // {id:2,description:'Become an Expert at Angular'},
   // {id:3,description:'Visit USA'}
 //  ]

 // todo = {
 //   id: 1,
 //   description: 'Learn Something'
 // }

  constructor(private todoDataService : TodoDataService) { }

  ngOnInit() {
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
