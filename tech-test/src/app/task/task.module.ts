import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RouterOutlet } from "@angular/router";

import { AppCommonModule } from "../common/common.module";

import { TasksRoutingModule } from "./task-routing.module";
import { TaskListComponent } from "./task-list/task-list.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskEffects } from "./store/task.effects";
import * as fromTask from "./store/task.reducers";
import { TasksManagmentComponent } from "./tasks-managment/tasks-managment.component";
import { TaskListItemComponent } from "./task-list-item/task-list-item.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    TaskListComponent,
    NewTaskComponent,
    TasksManagmentComponent,
    TaskListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
    TasksRoutingModule,
    StoreModule.forFeature(fromTask.tasksFeatureKey, fromTask.reducer),
    EffectsModule.forFeature([TaskEffects]),
    AppCommonModule,
  ],
})
export class TaskModule {}
