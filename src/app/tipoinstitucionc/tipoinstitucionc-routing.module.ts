import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoInstitucionCSIUucrearComponent } from './siu_crear.component';
import { TipoInstitucionCPIUuTipoInstitucionComponent } from './piu_tipoinstitucion.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TipoInstitucionCSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tipoinstitucion' , component: TipoInstitucionCPIUuTipoInstitucionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoInstitucionCRoutingModule { }
