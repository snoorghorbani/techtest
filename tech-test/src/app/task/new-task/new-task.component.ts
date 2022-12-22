import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { InputComponent } from "src/app/common/input/input.component";
import { NavigationService } from "src/app/shared/services/navigation.service";
import { Task } from "../interfaces";

import * as fromActions from "../store/task.actions";
import * as fromStore from "../store/task.reducers";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"],
})
export class NewTaskComponent {
  task: Task;

  @ViewChild("labelEl", { static: true })
  labelEl: InputComponent;

  constructor(
    private store: Store<fromStore.TaskState>,
    private readonly navigationService: NavigationService
  ) {
    this.task = {
      label: "",
      description: "sample description",
      category: "sample category",
      done: false,
    };
  }

  close() {
    this.navigationService.taskMangement();
  }

  create() {
    const label = this.labelEl.value;
    this.store.dispatch(
      fromActions.createTask({ task: { ...this.task, label } })
    );
    this.close();
  }
}
