import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ContratoComboPIUuContratoComboComponent } from './piu_contratocombo.component';

const routes: Routes = [
    { path: 'piu_contratocombo' , component: ContratoComboPIUuContratoComboComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratoComboRoutingModule { }
