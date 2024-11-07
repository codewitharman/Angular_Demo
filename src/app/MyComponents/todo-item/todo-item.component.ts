import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo; // Ensure that todo is defined as an Input property
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void { }

  onClick() {
    this.todoDelete.emit(this.todo); // Emit the todo item to be deleted
    console.log("On click has been triggered");
  }

  onCheckBoxClick(todo: Todo) {
    this.todoCheckBox.emit(this.todo);
    // Implementation for handling checkbox click
    console.log("Checkbox clicked", todo);
  }
}
