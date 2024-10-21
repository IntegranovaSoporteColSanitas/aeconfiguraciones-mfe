import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoEntidadCSIUucrearComponent } from './siu_crear.component';
import { TipoEntidadCPIUuTipoEntidadComponent } from './piu_tipoentidad.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TipoEntidadCSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tipoentidad' , component: TipoEntidadCPIUuTipoEntidadComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoEntidadCRoutingModule { }
