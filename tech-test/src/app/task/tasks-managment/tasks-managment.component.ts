import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import { TaskApiService } from "../task-api-service.service";
import * as fromActions from "../store/task.actions";
import * as fromStore from "../store/task.reducers";
import * as fromSelector from "../store/task.selectors";
import { Task } from "./../interfaces";
import { NavigationService } from "src/app/shared/services/navigation.service";

@Component({
  selector: "app-tasks-managment",
  templateUrl: "./tasks-managment.component.html",
  styleUrls: ["./tasks-managment.component.scss"],
})
export class TasksManagmentComponent {
  constructor(
    private readonly navigationService: NavigationService,
    private readonly service: TaskApiService,
    private store: Store<fromStore.TaskState>
  ) {}

  openNewTaskDlg() {
    this.navigationService.newTask();
  }
}
