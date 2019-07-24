import {Action} from '@ngrx/store';
import {CategoryModel, ExpenseModel} from '../app-models/category-expense.model';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_LOCAL_STORAGE = 'UPDATE_LOCAL_STORAGE';

// this action is triggered when user wants to create a new category
export class AddCategoryAction implements Action {
  readonly type = ADD_CATEGORY;

  constructor(public payload: CategoryModel) {

  }
}

// this action is triggered when user wants to delete category
export class DeleteCategoryAction implements Action {
  readonly type = DELETE_CATEGORY;

  constructor(public id: number) {

  }
}

// this action is triggered when user wants to update local storage
export class UpdateLocalStorageAction implements Action {
  readonly type = UPDATE_LOCAL_STORAGE;

  constructor(public payload?: number) {

  }
}

// this action is triggered when user wants to add a new expense information
export class AddExpenseAction implements Action {
  readonly type = ADD_EXPENSE;

  constructor(public payload: ExpenseModel) {

  }
}

// this action is triggered when user wants to update expense information
export class EditExpenseAction implements Action {
  readonly type = UPDATE_EXPENSE;

  constructor(public payload: { data: ExpenseModel, id: number }) {

  }
}

// called when user deletes an expense info
export class DeleteExpenseAction implements Action {
  readonly type = DELETE_EXPENSE;

  constructor(public payload: { value: boolean, id: number }) {

  }
}

export type StoreAction =
  AddCategoryAction
  | DeleteCategoryAction
  | AddExpenseAction
  | EditExpenseAction
  | DeleteExpenseAction
  | UpdateLocalStorageAction;
