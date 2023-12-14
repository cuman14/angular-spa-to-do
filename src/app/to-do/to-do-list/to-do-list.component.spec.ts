import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoListComponent } from './to-do-list.component';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ToDoService } from '../services/to-do.services';
import { Observable, of } from 'rxjs';
import { Task } from '../services/task-response.model';
import { TASK_STATUS } from '../tasks-status.enum';
class MockToDoService {
  geTaskList(options: { status: string }): Observable<Task[]> {
    // Mock implementation
    return of([]);
  }

  deleteTask(id: number): Observable<void> {
    // Mock implementation
    return of();
  }

  updateTask(task: Task): Observable<void> {
    // Mock implementation
    return of();
  }
}

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoListComponent],
      imports: [ReactiveFormsModule, MatIconModule],
      providers: [{ provide: ToDoService, useClass: MockToDoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTasksList on ngOnInit', () => {
    const spy = jest.spyOn(component, 'getTasksList');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should update tasksCompleted$ and tasksPending$ on getTasksList', () => {
    // Mock ToDoService.geTaskList to return some tasks
    const mockTasks: Task[] = [
      {
        id: 1,
        title: 'Task 1',
        status: TASK_STATUS.COMPLETE,
        date: '10/10/2023',
      },
    ];
    jest
      .spyOn(TestBed.inject(ToDoService), 'geTaskList')
      .mockReturnValue(of(mockTasks));

    component.getTasksList();

    expect(component.tasksCompleted$).toBeDefined();
    expect(component.tasksPending$).toBeDefined();
  });

  it('should update task status and on onCheckChange', () => {
    const task: Task = {
      id: 1,
      title: 'Task 1',
      status: TASK_STATUS.PENDING,
      date: '10/10/2023',
    };
    const spyUpdateTask = jest
      .spyOn(TestBed.inject(ToDoService), 'updateTask')
      .mockReturnValue(of({}));
    const spyGetTasksList = jest.spyOn(component, 'getTasksList');

    component.onCheckChange(task);

    expect(spyUpdateTask).toHaveBeenCalledWith({
      ...task,
      status: TASK_STATUS.COMPLETE,
    });
    expect(spyGetTasksList).toHaveBeenCalled();
  });

  it('should delete task and update task list', () => {
    // Arrange
    const id = 1;
    const spyDeleteTask = jest
      .spyOn(TestBed.inject(ToDoService), 'deleteTask')
      .mockReturnValue(of({}));
    const spyGetTasksList = jest.spyOn(component, 'getTasksList');

    // Act
    component.deleteTask(id);

    // Assert
    expect(spyDeleteTask).toHaveBeenCalledWith(id);
    expect(spyGetTasksList).toHaveBeenCalled();
  });
});
