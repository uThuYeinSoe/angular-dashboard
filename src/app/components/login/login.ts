import { Component } from '@angular/core';
import { InputContainer } from '../../reUseableComponent/input-container/input-container';

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

  onLogin() {}
}
