import {Injectable} from '@angular/core';
import {ExpenseModel} from '../app-models/category-expense.model';
import {Store} from '@ngrx/store';
import * as fromReducer from '../app-store/store.reducer';
import * as StoreAction from '../app-store/store.action';

@Injectable()
export class ExpenseService {
  constructor(private store: Store<fromReducer.AppState>) {

  }

  // dispatches a new action to add expense information
  public addExpenses(expense: ExpenseModel): void {
    this.store.dispatch(new StoreAction.AddExpenseAction(expense));
    this.updateLocalStorage();
  }

  // dispatches a new action to update expense information
  public editExpenses(expense: ExpenseModel, id: number): void {
    this.store.dispatch(new StoreAction.EditExpenseAction({data: expense, id}));
    this.updateLocalStorage();
  }

  // dispatches a new action to update expense visible status
  public deleteExpense(value: boolean, id: number) {
    this.store.dispatch(new StoreAction.DeleteExpenseAction({value, id}));
    this.updateLocalStorage();
  }

  // updates local storage
  public updateLocalStorage(budget?: number): void {
    this.store.dispatch(new StoreAction.UpdateLocalStorageAction(budget));
  }
}
