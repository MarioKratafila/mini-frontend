import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private service : TodoDataService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; // to avoid the error in console (Todo is not ready yet maybe during the rendering the page)
    this.todo = new Todo(1,'',false,new Date());
    this.service.getTodoById("mario", this.id).subscribe(
      data => this.todo = data
    );
  }

  saveTodo() {
    this.service.updateTodo('mario', this.id, this.todo).subscribe(
      data => {
        console.log(data)
      this.router.navigate(['todos'])
      } 
    );
    
  }

}
