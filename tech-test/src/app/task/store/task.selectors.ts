import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './task.reducers';

const tasksSelector = createFeatureSelector<fromStore.TaskState>(fromStore.tasksFeatureKey);

export const isLoading = createSelector(tasksSelector, fromStore.selectIsLoading);
export const tasks = createSelector(tasksSelector, fromStore.selectAll);
export const error = createSelector(tasksSelector, fromStore.selectError);