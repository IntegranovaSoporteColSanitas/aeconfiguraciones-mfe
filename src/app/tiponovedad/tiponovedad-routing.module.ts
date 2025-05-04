import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoNovedadSIUucrearComponent } from './siu_crear.component';
import { TipoNovedadSIUumodificarComponent } from './siu_modificar.component';
import { TipoNovedadPIUuTipoNovedadComponent } from './piu_tiponovedad.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TipoNovedadSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: TipoNovedadSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tiponovedad' , component: TipoNovedadPIUuTipoNovedadComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoNovedadRoutingModule { }
