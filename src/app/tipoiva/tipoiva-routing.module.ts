import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoIVASIUucrearComponent } from './siu_crear.component';
import { TipoIVASIUumodificarComponent } from './siu_modificar.component';
import { TipoIVAPIUuTipoIVAComponent } from './piu_tipoiva.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TipoIVASIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: TipoIVASIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tipoiva' , component: TipoIVAPIUuTipoIVAComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoIVARoutingModule { }
