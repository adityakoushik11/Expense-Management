import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SettingsComponent} from './settings.component';

const routes: Routes = [
  {path: '', component: SettingsComponent}
];      // initializes setting component routes

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  declarations: [SettingsComponent],
  exports: [RouterModule]
})
export class SettingsModule {

}
