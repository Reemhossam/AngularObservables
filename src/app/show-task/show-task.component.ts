import { CommonModule } from '@angular/common';
import { Component, DoCheck, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../Services/Task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit{
  tasks: string[] = ['task 1', 'task 2', 'task 3']
  taskService = inject(TaskService);
  ngOnInit(): void {
    this.taskService.myevent.subscribe((data:string)=>{
      this.tasks.push(data);
    })
  }
}
