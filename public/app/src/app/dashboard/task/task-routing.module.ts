import { RouterModule, Routes } from "@angular/router";

import { TaskComponent } from "./task.component";
import { TaskListComponent } from "./task-list/task-list.component";


const routes: Routes = [
  { 
    path: "", 
    component: TaskComponent,
    children: [
      { path: "", component: TaskListComponent }
    ]
  }
];

export const TaskRouting = RouterModule.forChild(routes);
