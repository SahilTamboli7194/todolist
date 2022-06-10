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
    this.localItem = localStorage.getItem('todos');

    if (this.localItem) {

      this.todos = JSON.parse(this.localItem);

    } 

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
    
  }

  addTodo(todo: Todo) {

    this.todos.push(todo);
    console.log('todo has been added ');
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log('item has ben set');
    
  }

  toggleTodo(todo: Todo) {

    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log('status change');
    
  }
}
