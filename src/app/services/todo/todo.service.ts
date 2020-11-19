import { Injectable } from '@angular/core';
import {Todo} from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];

  constructor() {}

  getTodos(): Todo[]{
    return this.todos;
  }

  addTodo(todo: Todo): void{
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo): void{
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
