import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";

import { Task } from "../interfaces";

export const requestLoadTasks = createAction("[Task/API] Request Load Tasks");

export const loadTasks = createAction(
  "[Task/API] Load Tasks",
  props<{ tasks: Task[] }>()
);

export const createTask = createAction(
  "[Task/API] Create Task",
  props<{ task: Task }>()
);

export const updateTask = createAction(
  "[Task/API] Update Task",
  props<{ task: Update<Task> }>()
);

export const taskChanged = createAction(
  "[Task/API] Task Changed",
  props<{ task: Update<Task> }>()
);

export const markTaskAsDone = createAction(
  "[Task/API] Mark Task As Done",
  props<Task>()
);

export const markTaskAsUncompleted = createAction(
  "[Task/API] Mark Task As Uncompleted",
  props<Task>()
);

export const deleteTask = createAction(
  "[Task/API] Delete Task",
  props<{ id: string }>()
);
