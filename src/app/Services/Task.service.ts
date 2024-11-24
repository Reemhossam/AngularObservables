import { EventEmitter } from "@angular/core";

export class TaskService{

  myevent:EventEmitter<string> = new EventEmitter<string>;

  createTask(inputVal){
    this.myevent.emit(inputVal);
  }
}
