import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoSucursalCSIUucrearComponent } from './siu_crear.component';
import { TipoSucursalCPIUuTipoSucursalCComponent } from './piu_tiposucursalc.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TipoSucursalCSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tiposucursalc' , component: TipoSucursalCPIUuTipoSucursalCComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoSucursalCRoutingModule { }
