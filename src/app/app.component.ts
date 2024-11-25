import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { TaskService } from './Services/Task.service';
import { SubjectComponent } from './subject/subject.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NewTaskComponent, ShowTaskComponent, SubjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TaskService]
})
export class AppComponent implements AfterViewInit{
  title = 'AngularObservables';
  data:any[] = [];
  array1=[1,3,5,7,9];
  array2=['A','B','C','D'];
  promiseData=new Promise((resolve,reject)=>{
    resolve([10,20,30,40,50]);
  });
  @ViewChild('createbtn')
  createbtn:ElementRef;
  createObs;


  //create an observanle
  // myObservable = new Observable((observer)=>{
  //   setTimeout(() => {observer.next(1) }, 1000);
  //   setTimeout(() => {observer.next(2) }, 2000);
  //   setTimeout(() => {observer.next(3) }, 3000);
  //   setTimeout(() => {observer.error(new Error('something want wrong.please try again later')) }, 3000);
  //   setTimeout(() => {observer.next(4) }, 4000);
  //   setTimeout(() => {observer.next(5) }, 5000);
  //   setTimeout(() => {observer.complete() }, 3000);
  // });

  //create observable using of operator
  // myObservable= of(this.array1,this.array2,20,30,'Hallo',true);
  //create observable using from operator
  // myObservable= from(this.array2);
    //convert promise to observable using from operator
    //myObservable= from(this.promiseData);

    // myObservable - 2,4,6,8,10
     // after map - 10,20,30,40,50
    myObservable= from([2,4,6,8,10,12]);
    transformObservable = this.myObservable.pipe(map((val)=>{
      return val*5;
    }));
    filterObservable= this.transformObservable.pipe(filter((val)=>{
      return val%4==0
    }));

    chainObservable = this.myObservable.pipe(map((val)=>{
      return val*5;
    }),filter((val)=>{
      return val%4==0
    }));

  onButtonClick(){
  //   this.myObservable.subscribe((val:any)=>{
  //     this.data.push(val);
  //   },
  //   (err)=>{
  //     alert(err.message);
  //   },
  // ()=>{
  //     alert('All the data is streamed')
  // });

  this.chainObservable.subscribe({
    next: (value)=> {
      this.data.push(value);
      console.log(value);
    },
    error(err) {
      alert(err.message);
    },
    complete() {
      alert('All the data is streamed')
      console.log('complete');
    },
  });
  }

  // buttonClick(){
  //   let counter=0;
  //   this.createObs= fromEvent(this.createbtn.nativeElement,'click')
  //                   .subscribe((data)=>{
  //                     this.addNewItem(++counter);
  //                   });
  // }
  ngAfterViewInit(): void {
    // this.buttonClick();
    // console.log("ngAfterViewInit called!")
  }
  // addNewItem(count){
  //   var elemDiv = document.createElement('div');
  //   elemDiv.innerHTML='item'+count;
  //   elemDiv.className = "data-list";
  //   let el=document.getElementById('container');
  //   el.appendChild(elemDiv);
  // }
  // unsubscribe(){
  //   this.createObs.unsubscribe();
  // }
}
