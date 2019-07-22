import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileData = {
    name: 'Aditya Koushik R',
    email: 'aditya.koushikr@gmail.com'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
