import { AuthenticationService } from './../_auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarc',
  templateUrl: './navbarc.component.html',
  styleUrls: ['./navbarc.component.css']
})
export class NavbarcComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit(){
  }

  viewBeneficiary(beneficiary){

  }
  addBeneficiary(beneficiary){

  }

  addSupport(beneficiary){
    
  }

  logout(){
    this.auth.logout()

  }

}
