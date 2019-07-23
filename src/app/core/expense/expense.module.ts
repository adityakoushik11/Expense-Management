import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ExpenseComponent} from './expense.component';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {EditExpenseComponent} from './edit-expense/edit-expense.component';
import {ExpenseService} from '../../app-services/expense.service';
import {CommonModule} from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {path: '', component: ExpenseComponent},
  {path: 'add', component: AddExpenseComponent},
  {path: 'update', component: EditExpenseComponent},
];      // initializes expense component routes

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule, NgxChartsModule, NgxPaginationModule],
  declarations: [ExpenseComponent, AddExpenseComponent, EditExpenseComponent],
  providers: [ExpenseService],
  exports: [RouterModule]
})
export class ExpenseModule {

}
