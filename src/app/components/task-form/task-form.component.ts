import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from '../../task.model';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  task: Task = { id: 0, title: '', description: '', dueDate: new Date(), recurring: false, completed: false }; // Include the completed property

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existingTask = this.taskService.getTask(Number(id));
      if (existingTask) {
        this.task = { ...existingTask };
      }
    }
  }

  saveTask(): void {
    if (this.task.id) {
      this.taskService.updateTask(this.task);
    } else {
      this.taskService.addTask(this.task);
    }
    this.router.navigate(['/']);
  }
}
