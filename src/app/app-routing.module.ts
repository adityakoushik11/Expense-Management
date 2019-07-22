import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'expense', pathMatch: 'full'},
  {path: 'profile', loadChildren: () => import('./core/profile/profile.module').then(module => module.ProfileModule)},
  {path: 'settings', loadChildren: () => import('./core/settings/settings.module').then(module => module.SettingsModule)},
  {path: 'expense', loadChildren: () => import('./core/expense/expense.module').then(module => module.ExpenseModule)},
  {path: '**', redirectTo: '/expense'}
];      // contains routes all global components and lazy loaded modules

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
