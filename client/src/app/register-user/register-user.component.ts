import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_auth/authentication.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup

  departments =[{id:1, name:"Livelihoods"},{id:2,name:"Protection"}]
  roles = [{id:1, name: "ADMIN"},{id:2,name:"USER"},{id:3, name:"LIVELIHOODS"},{id:4, name:'PROTECTION'}]
  errorMsg: any;

  constructor(private fb: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit(){
   this.registerForm = this.fb.group({
     name: [null],
     department:[null],
     title:[null],
     email:[null],
     password:[null],
     roles:[null]
   })

  }

  refresh(){
    this.ngOnInit()
  }


  submit(){
    console.log(this.registerForm.value)
    var _name = this.registerForm.value.name
    var _title= this.registerForm.value.title
    var _department = this.registerForm.value.department
    var _email = this.registerForm.value.email
    var _password = this.registerForm.value.password
    var _roles= this.registerForm.value.roles

    const newUser= {
     name: _name,
     title:_title,
     department: _department,
     email: _email,
     password:_password,
     roles:_roles
}

    this.auth.register(newUser)
    .subscribe(data =>{
      console.log("This works",data)
    this.ngOnInit()
    }, err => {
      this.errorMsg =err;
      console.log(this.errorMsg)
    }
      )

  }

}
