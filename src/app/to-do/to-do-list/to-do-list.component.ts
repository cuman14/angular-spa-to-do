import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../services/task-response.model';
import { ToDoService } from '../services/to-do.services';
import { TASK_STATUS } from '../tasks-status.enum';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  @Input() tasks!: FormArray;
  public tasks$!: Observable<Task[]>;
  public tasksCompleted$!: Observable<Task[]>;
  public tasksPending$!: Observable<Task[]>;

  public taskStatus = TASK_STATUS;
  constructor(private _toDoService: ToDoService) {}
  ngOnInit(): void {
    this.getTasksList();
  }

  getTasksList() {
    this.tasksCompleted$ = this._toDoService.geTaskList({
      status: TASK_STATUS.COMPLETE,
    });
    this.tasksPending$ = this._toDoService.geTaskList({
      status: TASK_STATUS.PENDING,
    });
  }

  deleteTask(id: number): void {
    this._toDoService.deleteTask(id).subscribe(() => {
      this.getTasksList();
      console.log(`Task deleted ${id}`);
    });
  }

  onCheckChange(task: Task) {
    this._toDoService
      .updateTask({ ...task, status: TASK_STATUS.COMPLETE })
      .subscribe(() => this.getTasksList());
  }
}
