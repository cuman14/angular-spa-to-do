import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoMainComponent } from './to-do-main.component';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { HttpClient } from '@angular/common/http';
import { ToDoService } from '../services/to-do.services';
import { TODO_CONFIG } from '../to-do.config';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-to-do-list',
  template: `<div>hola</div>`,
})
class MockComponent {
  @Input() tasks!: FormArray;
}

describe('ToDoMainComponent', () => {
  let component: ToDoMainComponent;
  let fixture: ComponentFixture<ToDoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoMainComponent, MockComponent],
      imports: [ReactiveFormsModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // The ToDoMainComponent should initialize the formTask FormGroup successfully.

  it('should initialize formTask', () => {
    expect(component.formTask).toBeTruthy();
  });

  // The ToDoMainComponent should have an empty tasks array in the formTask FormGroup.

  it('should have empty tasks array', () => {
    expect(component.tasks.length).toBe(0);
  });

  // The ToDoMainComponent should require the newTask field in the formTask FormGroup.

  it('should require newTask', () => {
    const newTaskControl = component.formTask.get('newTask');
    newTaskControl?.setValue('');
    expect(newTaskControl?.valid).toBeFalsy();
    expect(newTaskControl?.errors?.['required']).toBeTruthy();
  });
  // The ToDoMainComponent should update the value of the newTask field in the formTask FormGroup.
  it('should update newTask value', () => {
    const newTaskControl = component.formTask.get('newTask');
    const newValue = 'New Task';
    newTaskControl?.setValue(newValue);
    expect(newTaskControl?.value).toBe(newValue);
  });
});
