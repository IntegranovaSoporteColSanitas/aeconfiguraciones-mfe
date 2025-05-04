import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { RespRegionalSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { RespRegionalSIUuTCREAROMODFIRMAComponent } from './siu_tcrearomodfirma.component';
import { RespRegionalIIUuRespRegionaluFirmaComponent } from './iiu_respregional_firma.component';
import { RespRegionalPIUuRespRegionalComponent } from './piu_respregional.component';

const routes: Routes = [
    { path: 'siu_tmodificar' , component: RespRegionalSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearomodfirma' , component: RespRegionalSIUuTCREAROMODFIRMAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'iiu_respregional_firma' , component: RespRegionalIIUuRespRegionaluFirmaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_respregional' , component: RespRegionalPIUuRespRegionalComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespRegionalRoutingModule { }
