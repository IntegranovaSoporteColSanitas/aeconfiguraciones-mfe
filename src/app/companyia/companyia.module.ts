import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CompanyiaRoutingModule } from './companyia-routing.module';
import { CompanyiaSIUucrearComponent } from './siu_crear.component';
import { CompanyiaSIUumodificarComponent } from './siu_modificar.component';
import { CompanyiaPIUuCompanyiaComponent } from './piu_companyia.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CompanyiaRoutingModule
  ],
  declarations: [
    CompanyiaSIUucrearComponent,
    CompanyiaSIUumodificarComponent,
    CompanyiaPIUuCompanyiaComponent
  ],
  exports: [
    CompanyiaSIUucrearComponent,
    CompanyiaSIUumodificarComponent,
    CompanyiaPIUuCompanyiaComponent
  ]
})
export class CompanyiaModule { }
