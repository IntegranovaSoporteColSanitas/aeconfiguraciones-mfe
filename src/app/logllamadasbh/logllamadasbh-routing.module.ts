import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogLlamadasBHIIUuLogLlamadasBHComponent } from './iiu_logllamadasbh.component';
import { LogLlamadasBHPIUuLogLlamadasBHComponent } from './piu_logllamadasbh.component';

const routes: Routes = [
    { path: 'iiu_logllamadasbh' , component: LogLlamadasBHIIUuLogLlamadasBHComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_logllamadasbh' , component: LogLlamadasBHPIUuLogLlamadasBHComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogLlamadasBHRoutingModule { }
