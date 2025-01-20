import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogLlamadasAEIIUuLogLlamadasAEComponent } from './iiu_logllamadasae.component';
import { LogLlamadasAEPIUuLogLlamadasAEComponent } from './piu_logllamadasae.component';

const routes: Routes = [
    { path: 'iiu_logllamadasae' , component: LogLlamadasAEIIUuLogLlamadasAEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_logllamadasae' , component: LogLlamadasAEPIUuLogLlamadasAEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogLlamadasAERoutingModule { }
