import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2-lab';
  dataSentToToDoShow: { data: string, completed: boolean }[] = [];
  indexOfToDoSentToForm !: number
  recieveDataForm(data: string) {
    this.dataSentToToDoShow.push({ data: data, completed: false })
    // console.log(this.dataSentToToDoShow);
  }


  recievedIndexFromChild(index: number) {
    // console.log(index);
    // this.indexOfToDoSentToForm = index
    this.dataSentToToDoShow = this.dataSentToToDoShow.filter((item: any, i: any) => i != index)
    // console.log(this.dataSentToToDoShow);
  }
  recievedIndexFromChildToStyle(index: number) {
    this.dataSentToToDoShow.forEach((toDo, i) => {
      if (i == index) {
        if (toDo.completed == false) {
          toDo.completed = true
        } else {
          toDo.completed = false
        }
      }
    })
  }

}
