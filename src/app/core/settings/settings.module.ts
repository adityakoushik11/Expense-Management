import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SettingsComponent} from './settings.component';
import {ExpenseService} from '../../app-services/expense.service';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', component: SettingsComponent}
];      // initializes setting component routes

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule],
  declarations: [SettingsComponent],
  providers: [ExpenseService],
  exports: [RouterModule]
})
export class SettingsModule {

}
