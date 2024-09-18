import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ConfiguracionANSSIUuTCREARComponent } from './siu_tcrear.component';
import { ConfiguracionANSSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { ConfiguracionANSIIUuConfiguracionANSComponent } from './iiu_configuracionans.component';
import { ConfiguracionANSPIUuConfiguracionANSComponent } from './piu_configuracionans.component';

const routes: Routes = [
    { path: 'siu_tcrear' , component: ConfiguracionANSSIUuTCREARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: ConfiguracionANSSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'iiu_configuracionans' , component: ConfiguracionANSIIUuConfiguracionANSComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_configuracionans' , component: ConfiguracionANSPIUuConfiguracionANSComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionANSRoutingModule { }
