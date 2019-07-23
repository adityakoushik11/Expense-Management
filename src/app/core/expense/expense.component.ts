import {Component, OnInit} from '@angular/core';
import * as fromReducer from '../../app-store/store.reducer';
import {Store} from '@ngrx/store';
import {CategoryModel, ExpenseModel, PieChartModel} from '../../app-models/category-expense.model';
import {ExpenseService} from '../../app-services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  public categories: Array<CategoryModel>;      // contains list of categories
  public expensesList: Array<ExpenseModel>;     // contains list of expenses
  public chartData: Array<PieChartModel> = [];      // contains list of category wise expenses
  public pageNumber: number = 1;     // shows first page by default
  public pageLimit: number = 10;      // shows 10 records per page
  public budget: number = 0;      // contains total budget
  public totalExpenses: number = 0;     // contains total expenses
  public budgetChart: Array<PieChartModel> = [];    // contains budget expenses information

  constructor(private store: Store<fromReducer.AppState>, private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.store.select('app-store').subscribe(state => {
      if (state) {
        this.expensesList = state.expenses;
        this.categories = state.categories;
        this.budget = state.budget;
        this.calculateCategoryWiseExpenses();
        this.calculateBudgetExpenditure();
      }
    });
  }

  // updates soft delete status
  public changeExpenseVisibleStatus(expense: ExpenseModel): void {
    this.expenseService.deleteExpense(!expense.softDelete, expense._id);
  }

  // calculates category wise expenses
  private calculateCategoryWiseExpenses(): void {
    this.chartData = [];
    this.categories.forEach(category => {
      const expenseData = this.expensesList.filter(expense => expense.category === category.name && expense.softDelete === false);
      if (expenseData.length > 0) {
        let total;
        if (expenseData.length > 1) {
          total = expenseData.reduce((expense1: any, expense2: any) => expense1.value + expense2.value);
        } else if (expenseData.length === 1) {
          total = expenseData[0].value;
        }
        this.chartData.push({name: category.name, value: Number(total)});
      }
    });
  }

  // calculates budget utilization
  public calculateBudgetExpenditure(): void {
    this.totalExpenses = 0;
    this.expensesList.forEach(val => {
      if (val.softDelete) {
        return;
      }
      this.totalExpenses += val.value;
    });
    if (this.totalExpenses > 0) {
      const percentageOfBudgetUtilized = (this.totalExpenses * 100) / this.budget;
      this.budgetChart = [
        {name: 'Total Budget (%)', value: 100},
        {name: 'Total expenses (%)', value: percentageOfBudgetUtilized.toFixed(2)}
      ];
    }
  }

}
