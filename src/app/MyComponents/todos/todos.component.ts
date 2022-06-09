import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "this is first title",
        description: "this is my first task",
        active: true
      },
      {
        sno: 2,
        title: "this is second title",
        description: "this is my second task",
        active: true
      },
      {
        sno: 3,
        title: "this is third title",
        description: "this is my third task",
        active: true
      },
      {
        sno: 4,
        title: "this is fourth title",
        description: "this is my fourth task",
        active: false
      }
    ]
  }

  ngOnInit(): void {
  }

}
