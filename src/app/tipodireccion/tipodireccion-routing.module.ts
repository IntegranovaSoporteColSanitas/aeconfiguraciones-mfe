import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoDireccionSIUucrearComponent } from './siu_crear.component';
import { TipoDireccionSIUumodificarComponent } from './siu_modificar.component';
import { TipoDireccionPIUuTipoDireccionComponent } from './piu_tipodireccion.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TipoDireccionSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: TipoDireccionSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tipodireccion' , component: TipoDireccionPIUuTipoDireccionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDireccionRoutingModule { }
