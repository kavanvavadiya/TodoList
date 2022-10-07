import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log(todo.title)
    if(todo.title == undefined){
      alert("Enter Title First")
    }
    else if(todo.desc == undefined){
      alert("Enter Description First")
    }
    else{
      this.todoAdd.emit(todo);

    }

  }

}
