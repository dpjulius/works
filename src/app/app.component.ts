import { Component } from '@angular/core';
import { User } from './dataobject/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loggedInUser: User;


  ngOnInit() {
    
  }
}
