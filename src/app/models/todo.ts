import { v4 as uid } from 'uuid';

export class Todo {

  constructor(public id: string = '', public name: string = '', public content: string = '') {
    this.id = uid();
    this.name = name;
    this.content = content;
  }


  toString(): string{
    return 'TODO ' + this.id + ' - Name : ' + this.name + ' * Content : ' + this.content;
  }

}
