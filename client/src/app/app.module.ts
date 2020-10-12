import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LivelihoodsComponent } from './livelihoods/livelihoods.component';
import { ProtectionComponent } from './protection/protection.component';
import { NavbarcComponent } from './navbarc/navbarc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BeneficiaryCreateComponent } from './beneficiary-create/beneficiary-create.component';
import { LivelihoodsListComponent } from './livelihoods-list/livelihoods-list.component';
import { LivelihoodsEditComponent } from './livelihoods-edit/livelihoods-edit.component';
import { SearchByPipe } from './_filters/search-by.pipe';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ProtectionListComponent } from './protection-list/protection-list.component';
import { ProtectionEditComponent } from './protection-edit/protection-edit.component';
import { BeneficiariesListComponent } from './beneficiaries-list/beneficiaries-list.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { BeneficiaryEditComponent } from './beneficiary-edit/beneficiary-edit.component';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { LivelihoodsViewComponent } from './livelihoods-view/livelihoods-view.component';
import { ProtectionViewComponent } from './protection-view/protection-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LivelihoodsComponent,
    ProtectionComponent,
    NavbarcComponent,
    PageNotFoundComponent,
    BeneficiaryCreateComponent,
    LivelihoodsListComponent,
    LivelihoodsEditComponent,
    SearchByPipe,
    RegisterUserComponent,
    ProtectionListComponent,
    ProtectionEditComponent,
    BeneficiariesListComponent,
    BeneficiaryComponent,
    BeneficiaryEditComponent,
    BeneficiaryDetailsComponent,
    LivelihoodsViewComponent,
    ProtectionViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
