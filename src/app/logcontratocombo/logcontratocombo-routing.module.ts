import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogContratoComboPIUuLogContratoComboComponent } from './piu_logcontratocombo.component';

const routes: Routes = [
    { path: 'piu_logcontratocombo' , component: LogContratoComboPIUuLogContratoComboComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogContratoComboRoutingModule { }
