import { Component, OnInit } from '@angular/core';
import { NewUser } from './NewUser';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user : NewUser;
  public warning : string;
  public success : string = "";
  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
    this.user = new NewUser;
  }

  onSubmit(f : NgForm) : void{
    this.warning = "";
    this.success = "";
    if(f.untouched){
      this.warning = "Please fill out the form.";
    }
    else if (this.user.password != this.user.password2) {
      this.warning = "Passwords do not match";
    }
     else{
    this.auth.registerUser(this.user).subscribe(
      (success) => {
        this.success = "Registration was successful";       
      },
      (err) => {
        this.warning = err.error.message;
      }
    );
  }
}

}
