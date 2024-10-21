import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { CompanyiaSIUucrearComponent } from './siu_crear.component';
import { CompanyiaSIUumodificarComponent } from './siu_modificar.component';
import { CompanyiaPIUuCompanyiaComponent } from './piu_companyia.component';

const routes: Routes = [
    { path: 'siu_crear' , component: CompanyiaSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: CompanyiaSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_companyia' , component: CompanyiaPIUuCompanyiaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyiaRoutingModule { }
