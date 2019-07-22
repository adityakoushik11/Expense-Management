import {Component} from '@angular/core';
import {CategoryExpenseModel} from './app-models/category-expense.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expenses-management';

  constructor() {
    if (!localStorage.getItem('appData')) {
      const defaultData: CategoryExpenseModel = {
        expenses: [],
        categories: [],
        budget: 0
      };
      localStorage.setItem('appData', JSON.stringify(defaultData));
    }
  }
}
