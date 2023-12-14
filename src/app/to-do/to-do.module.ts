import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoMainComponent } from './to-do-main/to-do-main.component';
import { ToDoService } from './services/to-do.services';
import { TODO_CONFIG } from './to-do.config';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToDoListComponent, ToDoMainComponent],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [
    ToDoService,
    {
      provide: TODO_CONFIG,
      useValue: environment.apiUrl,
    },
  ],
})
export class ToDoModule {}
