import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../_auth/authentication.service';  
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMsg;
  loading = false;
  public successMsg;
  public loadingMsg = "Authenticating...Please wait";

  credentials: TokenPayload ={
    email: '',
    password:'',
    roles:''
  }

  loginForm: {};

  private formSubmitAttempt: boolean;
  user: any;

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(){
  }


  login(){
    this.auth.login(this.credentials)
    .subscribe(data=>{
      console.log("Data", data)
      this.router.navigateByUrl('/Beneficiaries')
    }, err=>{
      console.log("Error", err)
    })
  }

}
