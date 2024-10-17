import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ValorSIUucrearComponent } from './siu_crear.component';
import { ValorSIUumodificarComponent } from './siu_modificar.component';
import { ValorPIUuValorComponent } from './piu_valor.component';

const routes: Routes = [
    { path: 'siu_crear' , component: ValorSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: ValorSIUumodificarComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_valor' , component: ValorPIUuValorComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValorRoutingModule { }
