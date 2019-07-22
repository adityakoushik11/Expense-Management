import {CategoryExpenseModel, CategoryModel, ExpenseModel} from '../app-models/category-expense.model';
import * as StoreAction from './store.action';

export interface AppState {
  expenses: Array<ExpenseModel>;
  categories: Array<CategoryModel>;
  budget: number;
}

const appData = JSON.parse(localStorage.getItem('appData'));

const initialState: AppState = {
  expenses: appData ? appData.expenses : [],
  categories: appData ? appData.categories : [],
  budget: appData ? appData.budget : 0
};

export function storeReducer(state = initialState, action: StoreAction.StoreAction) {
  switch (action.type) {
    case StoreAction.ADD_EXPENSE:
      let expenses = [...state.expenses];
      expenses.push(action.payload);
      return {
        ...state,
        expenses: expenses,
        categories: [...state.categories],
        budget: state.budget
      };
    case StoreAction.UPDATE_EXPENSE:
      let expensesList = [...state.expenses];
      const index = expensesList.findIndex(val => val._id === action.payload.id);
      if (index !== -1) {
        expensesList.splice(index, 1, action.payload.data);
      }
      return {
        ...state,
        expenses: expensesList,
        categories: [...state.categories],
        budget: state.budget
      };
    case StoreAction.DELETE_EXPENSE:
      let allExpenses = [...state.expenses];
      const expenseIndex = allExpenses.findIndex(exp => exp._id === action.payload.id);
      if (expenseIndex !== -1) {
        allExpenses[expenseIndex].softDelete = action.payload.value;
      }
      return {
        ...state,
        expenses: allExpenses,
        categories: [...state.categories],
        budget: state.budget
      };
    case StoreAction.UPDATE_LOCAL_STORAGE:
      const data: CategoryExpenseModel = {
        categories: [...state.categories],
        expenses: [...state.expenses],
        budget: Number(action.payload || state.budget)
      };
      localStorage.setItem('appData', JSON.stringify(data));
      return {
        ...state,
        expenses: data.expenses,
        categories: data.categories,
        budget: data.budget
      };
    default :
      return state;
  }
}
