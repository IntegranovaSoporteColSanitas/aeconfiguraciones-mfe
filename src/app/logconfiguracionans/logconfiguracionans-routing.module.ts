import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogConfiguracionANSPIUuLogConfiguracionANSComponent } from './piu_logconfiguracionans.component';

const routes: Routes = [
    { path: 'piu_logconfiguracionans' , component: LogConfiguracionANSPIUuLogConfiguracionANSComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogConfiguracionANSRoutingModule { }
