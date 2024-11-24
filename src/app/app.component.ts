import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
    myObservable= from(this.promiseData);
 
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

  this.myObservable.subscribe({
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

  buttonClick(){
    this.createObs= fromEvent(this.createbtn.nativeElement,'click')
                    .subscribe((data)=>{
                      console.log(data);
                    });
  }
  ngAfterViewInit(): void {
    this.buttonClick();
    console.log("ngAfterViewInit called!")
  }
}
