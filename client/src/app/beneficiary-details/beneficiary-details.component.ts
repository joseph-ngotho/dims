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
  l_completion_date: any;
  l_date_enroled: any;
  l_drop_date: any;
  type_support: any;
  protection_support_recieved: any;
  p_completion_date: any;
  p_date_enroled: any;
  p_drop_date: any;

  date_options: {} = {year: 'numeric', month: 'long', day: 'numeric'}

  constructor(
    private route: ActivatedRoute,
    private beneficiariesService: BeneficiariesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      console.log("This id is", id)
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
        //Livelihood intervention Information
        this.type_support = this.bioData.map((a) => {
          if (a.type_support != null){
            return a.type_support
          }else{
            return "No data"
          }
        })
        this.l_completion_date = this.bioData.map((a) => {
          if (a.l_completion_date != null){
            return new Date(a.l_completion_date).toLocaleDateString("en-US", this.date_options)
          }else{
            return "No data"
          }
        })
       
        this.l_date_enroled = this.bioData.map((a) => {
          if (a.l_date_enroled != null){
            return new Date(a.l_completion_date).toLocaleDateString("en-US", this.date_options)
          }else{
            return "No data"
          }
        })
        this.l_drop_date = this.bioData.map((a) => {
          if (a.l_drop_date != null){
            return new Date(a.l_completion_date).toLocaleDateString("en-US", this.date_options)
          }else{
            return "No data"
          }
        })
       
        //Protection intervention Information
        this.protection_support_recieved = this.bioData.map((a) => {
          if (a.protection_support_recieved != null){
            return a.protection_support_recieved
          }else{
            return "No data"
          }
        })
        this.p_completion_date = this.bioData.map((a) => {
          if (a.p_completion_date != null){
            return new Date(a.p_completion_date).toLocaleDateString("en-US", this.date_options)
          }else{
            return "No data"
          }
        })
       
        this.p_date_enroled = this.bioData.map((a) => {
          if (a.p_date_enroled != null){
            
            return new Date(a.p_date_enroled).toLocaleDateString("en-US", this.date_options)
          }else{
            return "No data"
          }
        })
        this.p_drop_date = this.bioData.map((a) => {
          if (a.l_drop_date != null){
            return new Date(a.l_completion_date).toLocaleDateString("en-US", this.date_options)
          }else{
            return "No data"
          }
        })
      });
    });
  }
}
