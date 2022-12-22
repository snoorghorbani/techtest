import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewTaskComponent } from "./new-task/new-task.component";

import { TasksManagmentComponent } from "./tasks-managment/tasks-managment.component";

const routes: Routes = [
  {
    path: "",
    component: TasksManagmentComponent,
    children: [
      { path: "new", component: NewTaskComponent },
      { path: ":id", component: NewTaskComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
