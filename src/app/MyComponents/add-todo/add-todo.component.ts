import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  description!: string;
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const todo = {
      sno: 2,
      title: this.title,
      description: this.description,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
