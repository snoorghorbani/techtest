import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromActions from "../store/task.actions";
import * as fromStore from "../store/task.reducers";

import { Task } from "../interfaces";

@Component({
  selector: "app-task-list-item",
  templateUrl: "./task-list-item.component.html",
  styleUrls: ["./task-list-item.component.scss"],
})
export class TaskListItemComponent {
  @Input() task: Task;

  constructor(private store: Store<fromStore.TaskState>) {}

  changeStatus(chekced) {
    if (chekced) {
      this.setDone();
    } else {
      this.uncompleted();
    }
  }

  delete() {
    this.store.dispatch(fromActions.deleteTask({ id: this.task.id }));
  }

  setDone() {
    this.store.dispatch(fromActions.markTaskAsDone(this.task));
  }

  uncompleted() {
    this.store.dispatch(fromActions.markTaskAsUncompleted(this.task));
  }
}
