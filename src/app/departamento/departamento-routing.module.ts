import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { DepartamentoSIUucrearComponent } from './siu_crear.component';
import { DepartamentoPIUuDepartamentoComponent } from './piu_departamento.component';

const routes: Routes = [
    { path: 'siu_crear' , component: DepartamentoSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_departamento' , component: DepartamentoPIUuDepartamentoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
