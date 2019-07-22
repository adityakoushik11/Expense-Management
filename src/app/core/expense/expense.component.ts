import {Component, OnInit} from '@angular/core';
import * as fromReducer from '../../app-store/store.reducer';
import {Store} from '@ngrx/store';
import {CategoryModel, ExpenseModel} from '../../app-models/category-expense.model';
import {ExpenseService} from '../../app-services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  public categories: Array<CategoryModel>;      // contains list of categories
  public expensesList: Array<ExpenseModel>;     // contains list of expenses

  constructor(private store: Store<fromReducer.AppState>, private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.store.select('app-store').subscribe(state => {
      if (state) {
        this.expensesList = state.expenses;
        this.categories = state.categories;
      }
    });
  }

  // updates soft delete status
  public changeExpenseVisibleStatus(expense: ExpenseModel): void {
    this.expenseService.deleteExpense(!expense.softDelete, expense._id);
  }

}
