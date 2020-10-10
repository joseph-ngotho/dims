import { BeneficiariesService } from './../_services/beneficiaries.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-beneficiary-edit',
  templateUrl: './beneficiary-edit.component.html',
  styleUrls: ['./beneficiary-edit.component.css'],
})
export class BeneficiaryEditComponent implements OnInit {
  bioSectionUpdate: FormGroup;

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
  ];
  refferedfrom = [
    { id: 1, name: 'Protection' },
    { id: 2, name: 'Livelihoods' },
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
  biodata: any;
  _individual_number: any;
  _beneficiary_firstName: any;
  _beneficiary_lastName: any;
  _sex: any;
  _age: any;
  _disability_status: any;
  _type_disability: any;
  _status: any;
  _nationality: any;
  _date_enroled: any;
  _project: any;
  _hh_head: any;
  _group_name: any;
  _hh_male_size: any;
  _hh_female_size: any;
  _telephone_number: any;
  _camp: any;
  _block: any;
  _reffered_to: any;
  _reffered_from: any;
  _id_number: any;

  constructor(
    private fb: FormBuilder,
    private beneficiariesService: BeneficiariesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bioSectionUpdate = this.fb.group({
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

    //fetch biodata
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.beneficiariesService.getHBeneficiariesById(id).subscribe((data) => {
        this.biodata = data;
        console.log(data);
        this._individual_number = this.biodata
          .map((x) => x.individual_number)
          .toString();
        this._beneficiary_firstName = this.biodata
          .map((x) => x.beneficiary_firstName)
          .toString();
        this._beneficiary_lastName = this.biodata
          .map((x) => x.beneficiary_lastName)
          .toString();
        this._id_number = this.biodata.map((x) => x.id_number).toString();
        this._sex = this.biodata.map((x) => x.sex).toString();
        this._age = this.biodata.map((x) => x.age).toString();
        this._disability_status = this.biodata
          .map((x) => x.disability_status)
          .toString();
        this._type_disability = this.biodata
          .map((x) => x.type_disability)
          .toString();
        this._status = this.biodata.map((x) => x.status).toString();
        this._nationality = this.biodata.map((x) => x.nationality).toString();
        this._date_enroled = new Date(
          this.biodata.map((x) => x.date_enrolled)
        ).toLocaleString();
        this._project = this.biodata.map((x) => x.project).toString();
        this._hh_head = this.biodata.map((x) => x.hh_head).toString();
        this._group_name = this.biodata.map((x) => x.group_name).toString();
        this._hh_male_size = +this.biodata.map((x) => x.hh_male_size);
        this._hh_female_size = +this.biodata.map((x) => x.hh_female_size);
        this._telephone_number = this.biodata
          .map((x) => x.telephone_number)
          .toString();
        this._camp = this.biodata.map((x) => x.camp).toString();
        this._block = this.biodata.map((x) => x.block).toString();
        this._reffered_to = this.biodata.map((x) => x.reffered_to).toString();
        this._reffered_from = this.biodata
          .map((x) => x.reffered_from)
          .toString();

        //patch values to form
        this.bioSectionUpdate.patchValue({
          individual_number: this._individual_number,
          beneficiary_firstName: this._beneficiary_firstName,
          beneficiary_lastName: this._beneficiary_lastName,
          id_number: this._id_number,
          sex: this._sex,
          age: this._age,
          disability_status: this._disability_status,
          type_disability: this._type_disability,
          status: status,
          nationality: this._nationality,
          date_enroled: this._date_enroled,
          project: this._project,
          hh_head: this._hh_head,
          group_name: this._group_name,
          hh_male_size: this._hh_male_size,
          hh_female_size: this._hh_female_size,
          telephone_number: this._telephone_number,
          camp: this._camp,
          block: this._block,
          reffered_to: this._reffered_to,
          reffered_from: this._reffered_from,
        });
        //end patch values
      });
    });
  }

  //submit updates
  callingFunction() {
    var individual_number = this.bioSectionUpdate.value.individual_number;
    var beneficiary_firstName = this.bioSectionUpdate.value
      .beneficiary_firstName;
    var beneficiary_lastName = this.bioSectionUpdate.value.beneficiary_lastName;
    var id_number = this.bioSectionUpdate.value.id_number;
    var sex = this.bioSectionUpdate.value.sex;
    var age = this.bioSectionUpdate.value.age;
    var disability_status = this.bioSectionUpdate.value.disability_status;
    var type_disability = this.bioSectionUpdate.value.type_disability;
    var status = this.bioSectionUpdate.value.status;
    var nationality = this.bioSectionUpdate.value.nationality;
    var date_enroled = this.bioSectionUpdate.value.date_enroled;
    var project = this.bioSectionUpdate.value.project.join(',');
    var hh_head = this.bioSectionUpdate.value.hh_head;
    var group_name = this.bioSectionUpdate.value.group_name;
    var hh_male_size = this.bioSectionUpdate.value.hh_male_size;
    var hh_female_size = this.bioSectionUpdate.value.hh_female_size;
    var telephone_number = this.bioSectionUpdate.value.telephone_number;
    var camp = this.bioSectionUpdate.value.camp;
    var block = this.bioSectionUpdate.value.block;
    var reffered_to = this.bioSectionUpdate.value.reffered_to;
    var reffered_from = this.bioSectionUpdate.value.reffered_from;

    var updateBiodata = {
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
    console.log(this.bioSectionUpdate.value);
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.beneficiariesService
        .updateBeneficiary(id, updateBiodata)
        .subscribe((data) => {
          console.log(data);
          this.ngOnInit();
        });
    });
  }
}
