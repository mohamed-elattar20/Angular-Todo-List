import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-show',
  templateUrl: './to-do-show.component.html',
  styleUrls: ['./to-do-show.component.css']
})
export class ToDoShowComponent {
  @Input() dataFromParentArr !: { data: string, completed: boolean }[];
  @Output() indexSentToParent = new EventEmitter()
  @Output() indexSentToParentToStyle = new EventEmitter()
  isCompleted: boolean = false;
  removeToDo(index: number) {
    this.indexSentToParent.emit(index)
  }
  styleToDo(index: number) {
    // console.log(toDoRef);
    // console.log(index);
    this.indexSentToParentToStyle.emit(index)
  }
}
