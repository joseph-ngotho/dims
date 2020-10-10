import { BeneficiariesService } from './../_services/beneficiaries.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-beneficiary-create',
  templateUrl: './beneficiary-create.component.html',
  styleUrls: ['./beneficiary-create.component.css'],
})
export class BeneficiaryCreateComponent implements OnInit {
  bioSection: FormGroup;

  sexes = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
  ];
  disability = [
    { id: 1, name: 'Disabled' },
    { id: 2, name: 'Not disabled' },
  ];
  camp = [
    { id: 1, name: 'Dagahaley' },
    { id: 2, name: 'Ifo' },
    { id: 3, name: 'Hagadera' },
  ];
  block = [
    { id: 1, name: 'A1' },
    { id: 2, name: 'B4' },
    { id: 3, name: 'C3' },
  ];
  refferedto = [
    { id: 1, name: 'Protection' },
    { id: 2, name: 'Livelihoods' },
    { id: 3, name: 'HI' },
    { id: 4, name: 'WTK' },
    { id: 5, name: 'UNHCR' },
    { id: 6, name: 'TDH' },
    { id: 7, name: 'FILM AID' },
    { id: 8, name: 'SCI' },
    { id: 9, name: 'POLICE' },
    { id: 10, name: 'RCK' },
    { id: 11, name: 'KRSC' },
    { id: 12, name: 'MSF' },
  ];
  refferedfrom = [
    { id: 1, name: 'Protection' },
    { id: 2, name: 'Livelihoods' },
    { id: 3, name: 'HI' },
    { id: 4, name: 'WTK' },
    { id: 5, name: 'UNHCR' },
    { id: 6, name: 'TDH' },
    { id: 7, name: 'FILM AID' },
    { id: 8, name: 'SCI' },
    { id: 9, name: 'POLICE' },
    { id: 10, name: 'RCK' },
    { id: 11, name: 'KRSC' },
    { id: 12, name: 'MSF' },
  ];
  project = [
    { id: 1, name: 'Danida' },
    { id: 2, name: 'Echo' },
    { id: 3, name: 'UNHCR' },
    { id: 4, name: 'PRM' },
  ];
  hhhead = [
    { id: 1, name: 'Yes' },
    { id: 2, name: 'No' },
  ];
  errorMsg: any;

  constructor(
    private fb: FormBuilder,
    private beneficiariesService: BeneficiariesService
  ) {}

  ngOnInit() {
    this.bioSection = this.fb.group({
      individual_number: [''],
      beneficiary_firstName: [''],
      beneficiary_lastName: [''],
      id_number: [''],
      sex: [''],
      age: [''],
      disability_status: [''],
      type_disability: [''],
      status: [''],
      nationality: [''],

      //otherDetails: this.fb.group({
      date_enroled: [''],
      project: [''],
      hh_head: [''],
      group_name: [''],
      hh_male_size: [''],
      hh_female_size: [''],

      //}),

      //addressDetails: this.fb.group({
      telephone_number: [''],
      camp: [''],
      block: [''],
      reffered_to: [''],
      reffered_from: [''],
      // })
    });
  }

  callingFunction() {
    var individual_number = this.bioSection.value.individual_number;
    var beneficiary_firstName = this.bioSection.value.beneficiary_firstName;
    var beneficiary_lastName = this.bioSection.value.beneficiary_lastName;
    var id_number = this.bioSection.value.id_number;
    var sex = this.bioSection.value.sex;
    var age = this.bioSection.value.age;
    var disability_status = this.bioSection.value.disability_status;
    var type_disability = this.bioSection.value.type_disability;
    var status = this.bioSection.value.status;
    var nationality = this.bioSection.value.nationality;
    var date_enroled = this.bioSection.value.date_enroled;
    var project = this.bioSection.value.project.join(',');
    var hh_head = this.bioSection.value.hh_head;
    var group_name = this.bioSection.value.group_name;
    var hh_male_size = this.bioSection.value.hh_male_size;
    var hh_female_size = this.bioSection.value.hh_female_size;
    var telephone_number = this.bioSection.value.telephone_number;
    var camp = this.bioSection.value.camp;
    var block = this.bioSection.value.block;
    var reffered_to = this.bioSection.value.reffered_to;
    var reffered_from = this.bioSection.value.reffered_from;

    var newBiodata = {
      individual_number: individual_number,
      beneficiary_firstName: beneficiary_firstName,
      beneficiary_lastName: beneficiary_lastName,
      id_number: id_number,
      sex: sex,
      age: age,
      disability_status: disability_status,
      type_disability: type_disability,
      status: status,
      nationality: nationality,
      date_enroled: date_enroled,
      project: project,
      hh_head: hh_head,
      group_name: group_name,
      hh_male_size: hh_male_size,
      hh_female_size: hh_female_size,
      telephone_number: telephone_number,
      camp: camp,
      block: block,
      reffered_to: reffered_to,
      reffered_from: reffered_from,
    };
    console.log(this.bioSection.value);
    this.beneficiariesService.addBeneficiary(newBiodata).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
