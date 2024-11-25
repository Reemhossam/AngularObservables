import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, timeInterval } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{

ngOnInit(): void {
  //  let myObservable= new Observable((observer)=>{
  //   observer.next(Math.random())
  // });
  // myObservable.subscribe({ next:(data)=>{console.log(data);}  });
  // myObservable.subscribe({ next:(data)=>{console.log(data);}  });

  //let mySubject= new Subject();
  //behavior subject
  // let mySubject= new BehaviorSubject(100);
  //replay subject
  // let mySubject= new ReplaySubject();
  // mySubject.next(100);
  // mySubject.next(101);
  // mySubject.next(102);
  // mySubject.subscribe({ next:(data)=>{console.log("subscriber 1: "+data);}  });
  // mySubject.subscribe({ next:(data)=>{console.log("subscriber 2: "+data);}  });
  // mySubject.next(200);
  // mySubject.subscribe({ next:(data)=>{console.log("subscriber 3: "+data);}  });
  // mySubject.next(300);
   
//async subject
  // let mySubject= new AsyncSubject();
  // mySubject.next(100);
  // mySubject.next(101);
  // mySubject.next(102);

  // mySubject.subscribe({ next:(data)=>{console.log("subscriber 1: "+data);}  });
  // mySubject.next(103);
  // mySubject.complete();
  // mySubject.next(104);
  // mySubject.complete();

  //ajax call
  // const subject = new Subject();
  // const data = ajax('https://randomuser.me/api/');
  // data.subscribe((resp)=> console.log(resp));
  // data.subscribe((resp)=> console.log(resp));
  // data.subscribe((resp)=> console.log(resp));

  // subject.subscribe((resp)=> console.log(resp));
  // subject.subscribe((resp)=> console.log(resp));
  // subject.subscribe((resp)=> console.log(resp));
  // data.subscribe(subject);

  //promise vs observables
  const promise = new Promise((resolve,reject)=>{

  });
  const observable = new Observable((observer)=>{

  });

}

}

