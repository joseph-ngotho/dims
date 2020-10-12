import { Component, OnInit } from '@angular/core';
import { BeneficiariesService } from './../_services/beneficiaries.service';
import { AuthenticationService } from '../_auth/authentication.service';

@Component({
  selector: 'app-beneficiaries-list',
  templateUrl: './beneficiaries-list.component.html',
  styleUrls: ['./beneficiaries-list.component.css'],
})
export class BeneficiariesListComponent implements OnInit {
  p: number = 1
  beneficiaries: any;

  public searchText: string;
  public searchTo: string;
  public searchFrom: string;

  //Confirmation pop over configuration
  popoverTitle = 'Popover title';
  popoverMessage = 'Popover description';
  confirmClicked = false;
  cancelClicked = false;

  constructor(
    private beneficiariesService: BeneficiariesService,
    public auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.beneficiariesService.getBeneficiaries().subscribe((data) => {
      this.beneficiaries = data;
    });
  }

  reset(){
    this.ngOnInit()
  }
}
