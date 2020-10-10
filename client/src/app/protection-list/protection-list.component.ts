import { BeneficiariesService } from './../_services/beneficiaries.service';
import { Component, OnInit } from '@angular/core';
import { ProtectionService } from '../_services/protection.service';

@Component({
  selector: 'app-protection-list',
  templateUrl: './protection-list.component.html',
  styleUrls: ['./protection-list.component.css'],
})
export class ProtectionListComponent implements OnInit {
  beneficiaries: any;

  public searchText: string;
  interventions: any;

  //Confirmation pop over configuration
  popoverTitle = 'Popover title';
  popoverMessage = 'Popover description';
  confirmClicked = false;
  cancelClicked = false;

  constructor(private protectionService: ProtectionService) {}

  ngOnInit() {
    this.protectionService.getProtection().subscribe((data) => {
      this.interventions = data;
      console.log('interventions', this.interventions);
    });
  }
}
