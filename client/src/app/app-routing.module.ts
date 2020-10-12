import {AuthguardGuard} from './_auth/authguard.guard'
import { ProtectionViewComponent } from './protection-view/protection-view.component';
import { BeneficiaryEditComponent } from './beneficiary-edit/beneficiary-edit.component';
import { ProtectionEditComponent } from './protection-edit/protection-edit.component';
import { ProtectionListComponent } from './protection-list/protection-list.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ProtectionComponent } from './protection/protection.component';
import { LivelihoodsComponent } from './livelihoods/livelihoods.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivelihoodsListComponent } from './livelihoods-list/livelihoods-list.component';
import { BeneficiaryCreateComponent } from './beneficiary-create/beneficiary-create.component';
import { LivelihoodsEditComponent } from './livelihoods-edit/livelihoods-edit.component';
import { BeneficiariesListComponent } from './beneficiaries-list/beneficiaries-list.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { LivelihoodsViewComponent } from './livelihoods-view/livelihoods-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Beneficiaries',
    component: BeneficiaryComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: BeneficiariesListComponent },
      { path: 'create', component: BeneficiaryCreateComponent },
      { path: 'details/:id', component: BeneficiaryDetailsComponent },
      { path: 'edit/:id', component: BeneficiaryEditComponent },
    ],canActivate: [AuthguardGuard],
  },
  {
    path: 'Livelihoods',
    component: LivelihoodsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: LivelihoodsListComponent },
      { path: 'view/:id', component: LivelihoodsViewComponent },
      { path: 'edit/:id', component: LivelihoodsEditComponent },
    ], canActivate: [AuthguardGuard]
  },
  {
    path: 'Protection',
    component: ProtectionComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProtectionListComponent },
      { path: 'view/:id', component: ProtectionViewComponent },
      { path: 'edit/:id', component: ProtectionEditComponent },
    ],canActivate: [AuthguardGuard]
  },
  { path: 'Register', component: RegisterUserComponent, canActivate: [AuthguardGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
