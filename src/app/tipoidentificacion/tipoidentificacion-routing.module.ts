import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoIdentificacionSIUucrearComponent } from './siu_crear.component';
import { TipoIdentificacionSIUumodificarComponent } from './siu_modificar.component';
import { TipoIdentificacionPIUuTipoIdentificacionComponent } from './piu_tipoidentificacion.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TipoIdentificacionSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: TipoIdentificacionSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tipoidentificacion' , component: TipoIdentificacionPIUuTipoIdentificacionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoIdentificacionRoutingModule { }
