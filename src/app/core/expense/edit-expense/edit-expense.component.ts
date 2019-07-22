import {Component, OnInit} from '@angular/core';
import {CategoryModel, ExpenseModel} from '../../../app-models/category-expense.model';
import {Store} from '@ngrx/store';
import * as fromReducer from '../../../app-store/store.reducer';
import {ExpenseService} from '../../../app-services/expense.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {
  public categories: Array<CategoryModel> = [];     // contains list of categories
  public expenseData: ExpenseModel;    // contains information to add expense
  private id: number = null;     // contains expense id from route query params
  private expenseList: Array<ExpenseModel> = [];      // contains list of expenses

  constructor(private store: Store<fromReducer.AppState>, private expenseService: ExpenseService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(qParams => {
      this.id = Number(qParams.id);
    });
    this.store.select('app-store').subscribe(state => {
      if (state) {
        this.categories = state.categories;
        this.expenseList = state.expenses;
      }
    });
    this.expenseData = this.initializeAddExpense();
    this.expenseData = this.expenseList.find(expense => expense._id === this.id);
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
  public editExpenseData(): void {
    this.expenseService.editExpenses(this.expenseData, this.id);
    this.expenseData = this.initializeAddExpense();
    this.router.navigate(['expense']);
  }

}
