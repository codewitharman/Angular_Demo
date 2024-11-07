import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent], // Include CommonModule here
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string | null; // Allow localItem to be either string or null

  constructor() {
    this.localItem = localStorage.getItem("todos");

    if (this.localItem === null) {
      this.todos = [];
    } else {
      console.log()
      this.todos = JSON.parse(this.localItem); // Parse the stored JSON string
    }
  }


  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t.sno !== todo.sno); // Remove the todo item
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  onCheckBoxClick(todo: Todo) {
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  ngOnInit(): void { }
}
