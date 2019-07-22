import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: ProfileComponent}
];      // initializes profile component routes

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  declarations: [ProfileComponent],
  exports: [RouterModule]
})
export class ProfileModule {

}
