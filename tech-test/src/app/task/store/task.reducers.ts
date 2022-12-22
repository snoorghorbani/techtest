import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { Task } from "../interfaces";
import * as TaskActions from "./task.actions";

export const tasksFeatureKey = "tasks";

export interface TaskState extends EntityState<Task> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TaskState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(TaskActions.createTask, (state, action) =>
    adapter.addOne(action.task, state)
  ),
  on(TaskActions.taskChanged, (state, action) =>
    adapter.updateOne(action.task, state)
  ),
  on(TaskActions.deleteTask, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TaskActions.loadTasks, (state, action) =>
    adapter.setAll(action.tasks, {
      ...state,
      isLoading: false,
    })
  ),
  on(TaskActions.requestLoadTasks, (state, action) =>
    adapter.setAll([], {
      ...state,
      isLoading: true,
    })
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectIsLoading = (state: TaskState) => state.isLoading;
export const selectError = (state: TaskState) => state.error;
