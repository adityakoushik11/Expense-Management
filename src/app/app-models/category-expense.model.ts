export class CategoryModel {
  name: string;
  _id: number;
}

export interface ExpenseModel {
  category: string;
  name: string;
  value: string;
  expiryDate: string;
  softDelete: boolean;
  _id: number;
}

export interface CategoryExpenseModel {
  expenses: Array<ExpenseModel>;
  categories: Array<CategoryModel>;
  budget: number;
}
