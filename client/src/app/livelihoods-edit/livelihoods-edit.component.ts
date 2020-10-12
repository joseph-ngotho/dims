import { FormGroup, FormBuilder } from '@angular/forms';
import { BeneficiariesService } from './../_services/beneficiaries.service';
import { LivelihoodsService } from './../_services/livelihoods.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-livelihoods-edit',
  templateUrl: './livelihoods-edit.component.html',
  styleUrls: ['./livelihoods-edit.component.css'],
})
export class LivelihoodsEditComponent implements OnInit {
  interventions: FormGroup;

  intervention = [
    { id: 1, name: 'Business Skills' },
    { id: 2, name: 'Schorlaships' },
    { id: 3, name: 'Meet Value Chain' },
    { id: 4, name: 'Milk Valu Chain' },
    { id: 5, name: 'VSL' },
    { id: 6, name: 'Business Registration' },
    { id: 7, name: 'start-up Kit/Grant' },
    { id: 8, name: 'Bone Product development' },
    { id: 9, name: 'Marketing/Exhibition' },
    { id: 10, name: 'ICT/Android Training' },
    { id: 11, name: 'Hides/Skins support' },
    { id: 12, name: 'Vocational Training' },
    { id: 13, name: 'Performing arts skills development' },
    { id: 14, name: 'Visual Arts Skills Development' },
    { id: 15, name: 'Perfroming Arts Skills Development' },
    { id: 16, name: 'Talent Development/Sports' },
    { id: 17, name: 'Agriculture' },
    { id: 18, name: 'Poultry Rearing' },
    { id: 19, name: 'None' },
  ];

  beneficiary: any;
  _individual_number: any;
  _lastName: any;
  _firstName: any;
  _project: any;
  _camp: any;
  _telephone: any;
  livelihoods: any;
  livelihood_interventions: any;
  _date_enroled: any;
  _drop_date: any;
  completion_date: any;
  _date_enroled_formatted: any;
  _intervention_fk: any;
  successMsg: string;
  errorMsg: any;
  constructor(
    private livelihoodsService: LivelihoodsService,
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

      //fetch  livelihood support details
      this.livelihoodsService.getLivelihoodsById(id).subscribe((data) => {
        console.log('Livelihood date', data);
        (this.livelihood_interventions = data),
          (this._date_enroled = this.livelihood_interventions.map(
            (x) => x.date_enroled
          ));
        this._intervention_fk = this.livelihood_interventions.map(
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
  

  callingFunction() {
    console.log(this.interventions.value.intervention.join(','));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));

      //check if id exists in db
      this.livelihoodsService.getLivelihoodsById(id).subscribe((data) => {
        console.log(data);
        let _livelihoods_id = +data.some((livelihoods) => {
          return (livelihoods.id_beneficiaries_fk = id);
        });

        if (_livelihoods_id) {
          //use update
          var updateIntervention = {
            type_support: this.interventions.value.intervention.join(','),
            id_beneficiaries_fk: id,
          };

          this.livelihoodsService
            .updateLivelihoods(id, updateIntervention)
            .subscribe(
              (data) => {
                console.log(data);
                this.livelihoods = data;
                //submit dates
                var updateInterventionDates = {
                  id_beneficiaries_fk: id,
                  id_intervention_fk: this.interventions.value.intervention_fk,
                  date_enroled: this.interventions.value.date_enroled,
                  drop_date: this.interventions.value.drop_date,
                  completion_date: this.interventions.value.completion_date,
                };
                this.livelihoodsService
                  .updateLivelihoodsDates(id, updateInterventionDates)
                  .subscribe(
                    (data) => {
                      console.log(data);
                      this.successMsg = 'Intervention updated succssfully';
                      this.ngOnInit();
                    },
                    (err) => (this.errorMsg = err)
                  );
              },
              (err) => console.log(err)
            );
        } else {
          var newIntervention = {
            type_support: this.interventions.value.intervention.join(','),
            id_beneficiaries_fk: id,
          };

          this.livelihoodsService.addLivelihoods(newIntervention).subscribe(
            (data) => {
              console.log('new intervention', data);

              this.livelihoodsService.getLivelihoods().subscribe((data) => {
                this.livelihoods = data;
                console.log('Get livelihoods', this.livelihoods);
                let last_id = +this.livelihoods[this.livelihoods.length - 1].id;
                console.log('last id', last_id);
                var newDates = {
                  date_enroled: this.interventions.value.date_enroled,
                  completion_date: this.interventions.value.completion_date,
                  drop_date: this.interventions.value.drop_date,
                  id_beneficiaries_fk: id,
                  id_intervention_fk: last_id,
                };
                this.livelihoodsService.addLivelihoodsDates(newDates).subscribe(
                  (data) => {
                    console.log('new dates', data);
                    this.successMsg = 'Intervention submitted successfully';
                    this.ngOnInit();
                  },
                  (err) => (this.errorMsg = err)
                );
              });
            },
            (err) => console.log(err)
          );
        }
      });
    });
  }
}
