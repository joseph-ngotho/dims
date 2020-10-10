import { Component, OnInit } from '@angular/core';
import { BeneficiariesService } from '../_services/beneficiaries.service';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beneficiary-details',
  templateUrl: './beneficiary-details.component.html',
  styleUrls: ['./beneficiary-details.component.css'],
})
export class BeneficiaryDetailsComponent implements OnInit {
  bioData: any;
  fname: any;
  lname: any;
  age: any;
  gender: any;
  individualnumber: any;
  phone: any;
  camp: any;
  status: any;
  nationality: any;
  hhead: any;

  constructor(
    private route: ActivatedRoute,
    private beneficiariesService: BeneficiariesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.beneficiariesService.getHBeneficiaryById(id).subscribe((data) => {
        this.bioData = data;
        console.log(this.bioData);
        this.fname = this.bioData.map((a) => a.beneficiary_firstName);
        this.lname = this.bioData.map((a) => a.beneficiary_lastName);
        this.age = this.bioData.map((a) => a.age);
        this.gender = this.bioData.map((a) => a.sex);
        this.individualnumber = this.bioData.map((a) => a.individual_number);
        this.phone = this.bioData.map((a) => a.telephone_number);
        this.camp = this.bioData.map((a) => a.camp);
        this.status = this.bioData.map((a) => a.status);
        this.nationality = this.bioData.map((a) => a.nationality);
        this.hhead = this.bioData.map((a) => a.hh_head);
      });
    });
  }
}
