import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List';
constructor(){
  setTimeout(() => {
    this.title = "hello sahil"
  }, 5000);
}
}
