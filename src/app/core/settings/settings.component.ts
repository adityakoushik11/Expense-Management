import {Component, OnInit} from '@angular/core';
import {CategoryExpenseModel, CategoryModel} from '../../app-models/category-expense.model';
import {ExpenseService} from '../../app-services/expense.service';
import {Store} from '@ngrx/store';
import * as fromReducer from '../../app-store/store.reducer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public categoryData: CategoryModel;   // contains information to add categories
  public categoryList: Array<CategoryModel> = [];   // contains list of categories
  public budget: number = null;     // contains information about budget;

  constructor(private expenseService: ExpenseService, private store: Store<fromReducer.AppState>) {
    this.store.select('app-store').subscribe(state => {
      if (state) {
        this.categoryList = state.categories;
        this.budget = state.budget;
      }
    });
  }

  ngOnInit() {
    this.categoryData = this.initializeDefaultCategory();
  }

  // initializes default values
  private initializeDefaultCategory(): CategoryModel {
    return {
      _id: null,
      name: null
    };
  }

  // adds a new category
  public addCategory(): void {
    this.categoryData._id = Date.now();
    this.categoryList.push(this.categoryData);
    this.updateLocalStorage();
    this.categoryData = this.initializeDefaultCategory();
  }

  // delete category
  public deleteCategory(index: number): void {
    if (confirm('Are you sure you want to delete this category')) {
      this.categoryList.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  // update local storage
  public updateLocalStorage(type?: string): void {
    let appData: CategoryExpenseModel = JSON.parse(localStorage.getItem('appData'));
    if (appData) {
      if (!type) {
        appData.categories = this.categoryList;
      } else {
        appData.budget = this.budget;
      }
      this.expenseService.updateLocalStorage(type ? this.budget : undefined);
    }
  }

}
