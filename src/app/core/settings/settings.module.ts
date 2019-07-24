import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SettingsComponent} from './settings.component';
import {CommonModule} from '@angular/common';
import {SettingsService} from '../../app-services/settings.service';

const routes: Routes = [
  {path: '', component: SettingsComponent}
];      // initializes setting component routes

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule],
  declarations: [SettingsComponent],
  providers: [SettingsService],
  exports: [RouterModule]
})
export class SettingsModule {

}
