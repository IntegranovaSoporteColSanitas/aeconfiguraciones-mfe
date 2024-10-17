import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GSSIUuTGCREARTARIFAComponent } from './siu_tgcreartarifa.component';
import { GSSIUuTGCREARCOMBOComponent } from './siu_tgcrearcombo.component';
import { GSSIUuTGEDITARCOMBOComponent } from './siu_tgeditarcombo.component';
import { GSSIUuTGADDPLANTREPComponent } from './siu_tgaddplantrep.component';
import { GSSIUuTGEDITPLANTREPComponent } from './siu_tgeditplantrep.component';
import { GSSIUuTGCREARFINIEPSComponent } from './siu_tgcrearfinieps.component';
import { GSSIUuTGMODFINIEPSComponent } from './siu_tgmodfinieps.component';
import { GSSIUuTGCREARCONTEXENTOComponent } from './siu_tgcrearcontexento.component';

const routes: Routes = [
    { path: 'siu_tgcreartarifa' , component: GSSIUuTGCREARTARIFAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgcrearcombo' , component: GSSIUuTGCREARCOMBOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgeditarcombo' , component: GSSIUuTGEDITARCOMBOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgaddplantrep' , component: GSSIUuTGADDPLANTREPComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgeditplantrep' , component: GSSIUuTGEDITPLANTREPComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgcrearfinieps' , component: GSSIUuTGCREARFINIEPSComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgmodfinieps' , component: GSSIUuTGMODFINIEPSComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgcrearcontexento' , component: GSSIUuTGCREARCONTEXENTOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalServicesRoutingModule { }
