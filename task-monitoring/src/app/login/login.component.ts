import { Component, OnInit } from '@angular/core';
import { User } from '../dataobject/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  avatarImage: any = "../assets/img_avatar2.png";
  user: User;
  authenticated: boolean;

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.user = { username: '', password: '' };
  }

  authenticate() {
    try {
      this.authService.authenticate(this.user);
      this.router.navigate(['/main']);
    } catch (err) {
      alert(err.message);
    }
  }

  clear() {
    this.user = { username: '', password: '' };
  }
}
