import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { CuestionarioMedSIUucrearComponent } from './siu_crear.component';
import { CuestionarioMedMDIUuCuestionarioMedComponent } from './mdiu_cuestionariomed.component';
import { CuestionarioMedPIUuCuestionarioMedComponent } from './piu_cuestionariomed.component';

const routes: Routes = [
    { path: 'siu_crear' , component: CuestionarioMedSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_cuestionariomed' , component: CuestionarioMedMDIUuCuestionarioMedComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_cuestionariomed' , component: CuestionarioMedPIUuCuestionarioMedComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuestionarioMedRoutingModule { }
