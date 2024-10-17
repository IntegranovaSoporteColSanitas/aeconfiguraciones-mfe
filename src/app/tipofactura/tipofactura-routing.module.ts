import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoFacturaSIUucrearComponent } from './siu_crear.component';
import { TipoFacturaSIUumodificarComponent } from './siu_modificar.component';
import { TipoFacturaPIUuTipoFacturaComponent } from './piu_tipofactura.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TipoFacturaSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: TipoFacturaSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tipofactura' , component: TipoFacturaPIUuTipoFacturaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoFacturaRoutingModule { }
