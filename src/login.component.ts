import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User;
  public warning : string;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
    this.user = new User;
  }

  onSubmit(f: NgForm): void {
    this.warning = "";
    this.auth.login(this.user).subscribe(
      (success) => {
        // store the returned token in local storage as 'access_token'
        localStorage.setItem('access_token',success.token);
        // redirect to the "news-feed" route
        this.router.navigate(['/news-feed']);
      },
      (err) => {
        this.warning = err.error.message;
      }
    );

  }
}
