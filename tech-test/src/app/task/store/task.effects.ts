import { tasks } from "./task.selectors";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, debounceTime, delay } from "rxjs/operators";

import { TaskApiService } from "../task-api-service.service";
import {
  loadTasks,
  requestLoadTasks,
  createTask,
  markTaskAsDone,
  markTaskAsUncompleted,
  taskChanged,
  deleteTask,
} from "./task.actions";

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private service: TaskApiService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLoadTasks),
      switchMap((action) =>
        this.service.load().pipe(map((data) => loadTasks({ tasks: data })))
      )
    )
  );

  createTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTask),
      switchMap((action) =>
        this.service.create(action.task).pipe(map((data) => requestLoadTasks()))
      )
    )
  );

  markTaskAsDone$ = createEffect(() =>
    this.actions$.pipe(
      ofType(markTaskAsDone),
      switchMap((task) =>
        this.service.update({ ...task, done: true }).pipe(
          map(() =>
            taskChanged({
              task: { id: task.id, changes: { done: true } },
            })
          )
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTask),
      switchMap(({ id }) =>
        this.service.delete(id).pipe(map(() => deleteTask({ id })))
      )
    )
  );

  markTaskAsUncompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(markTaskAsUncompleted),
      switchMap((task) =>
        this.service.update({ ...task, done: false }).pipe(
          map(() =>
            taskChanged({
              task: { id: task.id, changes: { done: false } },
            })
          )
        )
      )
    )
  );
}
