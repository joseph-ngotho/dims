import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../_auth/authentication.service';  
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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

  loginForm: FormGroup;

  private formSubmitAttempt: boolean;
  user: any;
  submitted: boolean = false;

  constructor(private router: Router, private auth: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit(){
    
    this.loginForm = this.fb.group({
      email:[null, [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: [null, Validators.required]
    })
  }

  //get form controls
get f(){
  return this.loginForm.controls;
}


  login(){
    this.errorMsg = ""
    this.submitted = true

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.auth.login(this.loginForm.value)
    .subscribe(data=>{
      console.log("Data", data)
      this.router.navigateByUrl('/Beneficiaries')
    }, err=>{
      this.errorMsg = err.error.reason;
      this.loading = false;
      console.log("Error", err)
    })
  }

}
