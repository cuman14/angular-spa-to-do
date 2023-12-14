import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TODO_CONFIG } from '../to-do.config';
import { Task } from './task-response.model';

@Injectable()
export class ToDoService {
  private _apiUrl: string;

  constructor(@Inject(TODO_CONFIG) apiUrl: string, private _http: HttpClient) {
    this._apiUrl = apiUrl;
  }

  public geTaskList({ status = 'complete' }): Observable<Task[]> {
    return this._http.get<Task[]>(`${this._apiUrl}/tasks`, {
      params: {
        status: status,
      },
    });
  }

  public deleteTask(id: number) {
    return this._http.delete(`${this._apiUrl}/tasks/${id}`);
  }

  public updateTask(task: Task) {
    return this._http.patch(`${this._apiUrl}/tasks/${task.id}`, task);
  }
}
