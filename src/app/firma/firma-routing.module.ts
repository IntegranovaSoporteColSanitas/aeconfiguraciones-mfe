import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { FirmaPIUuFirmasRespRegionalComponent } from './piu_firmasrespregional.component';
import { FirmaPIUuFirmauNullComponent } from './piu_firma_null.component';

const routes: Routes = [
    { path: 'piu_firmasrespregional' , component: FirmaPIUuFirmasRespRegionalComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_firma_null' , component: FirmaPIUuFirmauNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmaRoutingModule { }
