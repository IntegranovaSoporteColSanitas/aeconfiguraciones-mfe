import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { CausalSIUucrearComponent } from './siu_crear.component';
import { CausalSIUumodificarComponent } from './siu_modificar.component';
import { CausalUAutouComponent } from './_auto_.component';
import { CausalPIUuCausaluNullComponent } from './piu_causal_null.component';

const routes: Routes = [
    { path: 'siu_crear' , component: CausalSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: CausalSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: '_auto_' , component: CausalUAutouComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_causal_null' , component: CausalPIUuCausaluNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CausalRoutingModule { }
