import { Component } from '@angular/core';
import { InputContainer } from '../../reUseableComponent/input-container/input-container';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [InputContainer],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  emailLabel = 'Email';
  emailType = 'text';

  passwordLable = 'Password';
  passwordType = 'password';

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/main', 'dashboard']);
  }
}
