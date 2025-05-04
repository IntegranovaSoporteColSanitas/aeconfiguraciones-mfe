import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EstadoPersonaSIUucrearComponent } from './siu_crear.component';
import { EstadoPersonaSIUumodificarComponent } from './siu_modificar.component';
import { EstadoPersonaPIUuEstadoPersonaComponent } from './piu_estadopersona.component';

const routes: Routes = [
    { path: 'siu_crear' , component: EstadoPersonaSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: EstadoPersonaSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_estadopersona' , component: EstadoPersonaPIUuEstadoPersonaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoPersonaRoutingModule { }
