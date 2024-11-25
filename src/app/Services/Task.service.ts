import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class TaskService{

  // myevent:EventEmitter<string> = new EventEmitter<string>;
  mysubject = new Subject<string>();

  createTask(inputVal){
    //this.myevent.emit(inputVal);
    this.mysubject.next(inputVal);
  }
}
