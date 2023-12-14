import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoMainComponent } from './to-do-main/to-do-main.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoRoutingModule {}
