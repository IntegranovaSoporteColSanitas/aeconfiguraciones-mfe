import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { FrecuenciaActSIUucrearComponent } from './siu_crear.component';
import { FrecuenciaActSIUumodificarComponent } from './siu_modificar.component';
import { FrecuenciaActPIUuFrecuenciaActComponent } from './piu_frecuenciaact.component';

const routes: Routes = [
    { path: 'siu_crear' , component: FrecuenciaActSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: FrecuenciaActSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_frecuenciaact' , component: FrecuenciaActPIUuFrecuenciaActComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrecuenciaActRoutingModule { }
