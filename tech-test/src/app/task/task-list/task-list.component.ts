import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

// import * as fromCartActions from '../../../header/store/header.actions';
import * as fromActions from "../store/task.actions";
import * as fromStore from "../store/task.reducers";
import * as fromSelector from "../store/task.selectors";
import { Task } from "./../interfaces";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  tasks$: Observable<Task[]>;

  constructor(private store: Store<fromStore.TaskState>) {
    this.store.dispatch(fromActions.requestLoadTasks());
    this.tasks$ = this.store.select(fromSelector.tasks);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
    // this.store.select(state => state).subscribe(data => {
    //   console.log('data', data);
    // });
  }

  ngOnInit(): void {}

  trackById(index, item: Task) {
    return item.id;
  }
}
