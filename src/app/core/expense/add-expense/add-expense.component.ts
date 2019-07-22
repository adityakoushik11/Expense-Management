import {Component, OnInit} from '@angular/core';
import * as fromReducer from '../../../app-store/store.reducer';
import {CategoryModel, ExpenseModel} from '../../../app-models/category-expense.model';
import {Store} from '@ngrx/store';
import {ExpenseService} from '../../../app-services/expense.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  public categories: Array<CategoryModel> = [];     // contains list of categories
  public expenseData: ExpenseModel;    // contains information to add expense

  constructor(private store: Store<fromReducer.AppState>, private expenseService: ExpenseService, private router: Router) {
    this.store.select('app-store').subscribe(state => {
      if (state) {
        this.categories = state.categories;
      }
    });
    this.expenseData = this.initializeAddExpense();
  }

  ngOnInit() {
  }

  // initializes add expense object with default values
  private initializeAddExpense(): ExpenseModel {
    return {
      category: null,
      name: null,
      expiryDate: null,
      value: null,
      softDelete: false,
      _id: null
    };
  }

  // adds a new expense
  public addNewExpenseData(): void {
    this.expenseData._id = Date.now();
    this.expenseService.addExpenses(this.expenseData);
    this.expenseData = this.initializeAddExpense();
    this.router.navigate(['expense']);
  }

}
