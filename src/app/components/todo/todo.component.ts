import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo/todo.service';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[] = [];
  public name: string;
  public content: string;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void{
    const todo = new Todo();
    todo.name = this.name;
    todo.content = this.content;
    this.todoService.addTodo(todo);
    console.log(todo.toString());
  }

  deleteTodo(todo: Todo): void{
    this.todoService.deleteTodo(todo);
  }

  ngOnInit(): void {
  }


}
