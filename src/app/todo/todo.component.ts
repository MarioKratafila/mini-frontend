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
  submitted: boolean = false;

  constructor(private service: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; // to avoid the error in console (Todo is not ready yet maybe during the rendering the page)
    this.todo = new Todo(0, '', false, new Date());
    if (this.id != -1) {
      this.service.getTodoById("mario", this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.service.createTodo('mario', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      );

    } else {
      this.service.updateTodo('mario', this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      );
    }
  }

  setSubmitted(): void {
    this.submitted = true;
  }

  getSubmitted(): boolean {
    return this.submitted;
  }

}
