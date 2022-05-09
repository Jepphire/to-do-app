import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  todoNewForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.todoNewForm = new FormGroup({
      'list-name': new FormControl(null)
    })
  }


}
