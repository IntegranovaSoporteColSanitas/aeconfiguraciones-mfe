import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { CausaExclusionSIUucrearComponent } from './siu_crear.component';
import { CausaExclusionSIUumodificarComponent } from './siu_modificar.component';
import { CausaExclusionPIUuCausaExclusionComponent } from './piu_causaexclusion.component';

const routes: Routes = [
    { path: 'siu_crear' , component: CausaExclusionSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: CausaExclusionSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_causaexclusion' , component: CausaExclusionPIUuCausaExclusionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CausaExclusionRoutingModule { }
