import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  public name: string;
  public pass: string;
  public user: User;
  public invalidCredentials: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  public login() {
    this.loginService.login(this.name, this.pass).subscribe(res => {
      if (res == null) {
        this.invalidCredentials = 'sorry, wrong password or username.'
      } else {
        this.user = res;
        this.loginService.authenticate(this.user).subscribe(
          a => { this.router.navigate(['/home']) }
        );
      }
    }
    );
  }
}
