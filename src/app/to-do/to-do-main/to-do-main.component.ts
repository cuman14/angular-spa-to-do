import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-do-main',
  templateUrl: './to-do-main.component.html',
  styleUrls: ['./to-do-main.component.scss'],
})
export class ToDoMainComponent implements OnInit {
  public formTask!: FormGroup;

  get tasks() {
    return this.formTask.get('tasks') as FormArray;
  }
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.formTask = this._fb.group({
      newTask: ['', Validators.required],
      tasks: this._fb.array([]),
    });
  }
}
