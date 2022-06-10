import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: any;
  todos: Todo[] = [];

  constructor() {
    // this.localItem = 'this is local item';
    const items = localStorage.getItem('todos');

    if (items) {

      this.todos = JSON.parse(items);

    } else {



    }


    // this.todos = [];

  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    //console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);


    console.log('todo has been delated ');
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log('item has ben set');
    console.log(this.localItem);
  }

  addTodo(todo: Todo) {

    this.todos.push(todo);
    console.log('todo has been added ');
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log('item has ben set');
    console.log(this.localItem);
  }
}
