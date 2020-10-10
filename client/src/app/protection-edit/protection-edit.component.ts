import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProtectionService } from '../_services/protection.service';
import { BeneficiariesService } from '../_services/beneficiaries.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-protection-edit',
  templateUrl: './protection-edit.component.html',
  styleUrls: ['./protection-edit.component.css'],
})
export class ProtectionEditComponent implements OnInit {
  interventions: FormGroup;

  intervention = [
    { id: 1, name: 'GBV Mass Awareness' },
    { id: 2, name: 'GBV Response Services' },
    { id: 3, name: 'Safe Spaces' },
    { id: 4, name: 'SASA' },
    { id: 5, name: 'EMAP' },
    { id: 6, name: 'Referral' },
    { id: 7, name: 'Community Support Group' },
    { id: 8, name: 'NFIS/Material Support' },
    { id: 9, name: 'Multi-Purpose Cash Grant' },
    { id: 10, name: 'Training' },
    { id: 11, name: 'Mentorship' },
    { id: 12, name: 'Resilience Training' },
    { id: 13, name: 'Life Skills Training' },
    { id: 14, name: 'Sports' },
    { id: 15, name: 'Councelling' },
    { id: 16, name: 'Psychosocial Support' },
  ];

  beneficiary: any;
  _individual_number: any;
  _lastName: any;
  _firstName: any;
  _project: any;
  _camp: any;
  _telephone: any;
  protections: any;
  protection_interventions: any;
  _date_enroled: any;
  _drop_date: any;
  completion_date: any;
  _date_enroled_formatted: any;
  _intervention_fk: any;
  constructor(
    private protectionService: ProtectionService,
    private beneficiariesService: BeneficiariesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.interventions = this.fb.group({
      intervention: [''],
      intervention_fk: [''],
      date_enroled: [''],
      drop_date: [''],
      completion_date: [''],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      console.log(id);

      //fetch beneficiary biodata details
      this.beneficiariesService.getHBeneficiariesById(id).subscribe((data) => {
        console.log(data);
        this.beneficiary = data;
        this._individual_number = this.beneficiary.map(
          (x) => x.individual_number
        );
        this._firstName = this.beneficiary.map((x) => x.beneficiary_firstName);
        this._lastName = this.beneficiary.map((x) => x.beneficiary_lastName);
        this._project = this.beneficiary.map((x) => x.project);
        this._camp = this.beneficiary.map((x) => x.camp);
        this._telephone = this.beneficiary.map((x) => x.telephone_number);
      });

      //fetch  protection support details
      this.protectionService.getProtectionById(id).subscribe((data) => {
        //console.log('protection date', data);
        (this.protection_interventions = data),
          (this._date_enroled = this.protection_interventions.map(
            (x) => x.date_enroled
          ));
        this._intervention_fk = this.protection_interventions.map(
          (x) => x.id_intervention_fk
        );

        console.log('Interventions id', this._intervention_fk);
        //this._date_enroled_formatted = new Date(this._date_enroled);
        //console.log('Formatted date', this.date_enroled_formatted);
        // console.log('Date enrolled', this._date_enroled);
        //patch value to form
        this.interventions.patchValue({
          intervention_fk: this._intervention_fk,
          date_enroled: this._date_enroled,
          drop_date: this._drop_date,
          completion_date: this.completion_date,
        });
      });
    });
  }
  date_enroled_formatted(arg0: string, date_enroled_formatted: any) {
    throw new Error('Method not implemented.');
  }

  callingFunction() {
    console.log(this.interventions.value.intervention.join(','));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));

      //check if id exists in db
      this.protectionService.getProtectionById(id).subscribe((data) => {
        console.log(data);
        let _protections_id = +data.some((protections) => {
          return (protections.id_beneficiaries_fk = id);
        });

        if (_protections_id) {
          //use update
          var updateIntervention = {
            type_support: this.interventions.value.intervention.join(','),
            id_beneficiaries_fk: id,
          };

          this.protectionService
            .updateProtection(id, updateIntervention)
            .subscribe(
              (data) => {
                console.log(data);
                this.protections = data;
                //submit dates
                var updateInterventionDates = {
                  id_beneficiaries_fk: id,
                  id_intervention_fk: this.interventions.value.intervention_fk,
                  date_enroled: this.interventions.value.date_enroled,
                  drop_date: this.interventions.value.drop_date,
                  completion_date: this.interventions.value.completion_date,
                };
                this.protectionService
                  .updateProtectionDates(id, updateInterventionDates)
                  .subscribe((data) => {
                    console.log(data);
                    this.ngOnInit();
                  });
              },
              (err) => console.log(err)
            );
        } else {
          var newIntervention = {
            type_support: this.interventions.value.intervention.join(','),
            id_beneficiaries_fk: id,
          };

          this.protectionService.addProtection(newIntervention).subscribe(
            (data) => {
              console.log('new intervention', data);

              this.protectionService.getProtection().subscribe((data) => {
                this.protections = data;
                console.log('Get protections', this.protections);
                let last_id = +this.protections[this.protections.length - 1]
                  .id_protection;
                console.log('last id', last_id);
                var newDates = {
                  date_enroled: this.interventions.value.date_enroled,
                  completion_date: this.interventions.value.completion_date,
                  drop_date: this.interventions.value.drop_date,
                  id_beneficiaries_fk: id,
                  id_intervention_fk: last_id,
                };
                this.protectionService
                  .addProtectionDates(newDates)
                  .subscribe((data) => {
                    console.log('new dates', data);
                    this.ngOnInit();
                  });
              });
            },
            (err) => console.log(err)
          );
        }
      });
    });
  }
}
