import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {

  @Input() todo!: Todo; // Ensure that todo is defined as an Input property
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title: string = '';
  desc: string = '';

  onSubmit() {
     const todo={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
     }
    
     this.todoAdd.emit(todo);
  }

}