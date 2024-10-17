import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ProrrateoSIUucrearComponent } from './siu_crear.component';
import { ProrrateoSIUumodificarComponent } from './siu_modificar.component';
import { ProrrateoPIUuProrrateoComponent } from './piu_prorrateo.component';

const routes: Routes = [
    { path: 'siu_crear' , component: ProrrateoSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: ProrrateoSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_prorrateo' , component: ProrrateoPIUuProrrateoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProrrateoRoutingModule { }
