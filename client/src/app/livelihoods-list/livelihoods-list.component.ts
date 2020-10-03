import { AuthenticationService } from './../_auth/authentication.service';
import { LivelihoodsService } from './../_services/livelihoods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livelihoods-list',
  templateUrl: './livelihoods-list.component.html',
  styleUrls: ['./livelihoods-list.component.css'],
})
export class LivelihoodsListComponent implements OnInit {
  beneficiaries: any;

  public searchText: string;
  interventions: any;

  //Confirmation pop over configuration
  popoverTitle = 'Popover title';
  popoverMessage = 'Popover description';
  confirmClicked = false;
  cancelClicked = false;

  constructor(
    private livelihoodsService: LivelihoodsService,
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.livelihoodsService.getLivelihoods().subscribe((data) => {
      this.interventions = data;
      console.log('interventions', this.interventions);
    });
  }
}
