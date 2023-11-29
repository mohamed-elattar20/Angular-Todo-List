import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent {
  toDoValue: string = "";
  @Output() toDoDataFromChildForm = new EventEmitter()
  addTask(toDoInput: any) {    // toDoInput is a reference to to the input 
    // console.log(this.toDoValue);
    if (this.toDoValue) {
      this.toDoDataFromChildForm.emit(this.toDoValue)
      this.toDoValue = ""
      toDoInput.focus()

    }
  }
}
