import * as fromReducer from '../app-store/store.reducer';
import * as StoreAction from '../app-store/store.action';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {CategoryModel} from '../app-models/category-expense.model';

@Injectable()
export class SettingsService {
  constructor(private store: Store<fromReducer.AppState>) {

  }

  // dispatches a new action to save category
  public saveCategory(data: CategoryModel): void {
    this.store.dispatch(new StoreAction.AddCategoryAction(data));
    this.updateLocalStorage();
  }

  // dispatches a new action to delete category
  public deleteCategory(id: number): void {
    this.store.dispatch(new StoreAction.DeleteCategoryAction(id));
    this.updateLocalStorage();
  }

  // updates local storage
  public updateLocalStorage(budget?: number): void {
    this.store.dispatch(new StoreAction.UpdateLocalStorageAction(budget));
  }
}
