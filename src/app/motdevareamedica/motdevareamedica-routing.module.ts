import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { MotDevAreaMedicaSIUucrearComponent } from './siu_crear.component';
import { MotDevAreaMedicaSIUumodificarComponent } from './siu_modificar.component';
import { MotDevAreaMedicaPIUuMotDevAreaMedicaComponent } from './piu_motdevareamedica.component';

const routes: Routes = [
    { path: 'siu_crear' , component: MotDevAreaMedicaSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: MotDevAreaMedicaSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_motdevareamedica' , component: MotDevAreaMedicaPIUuMotDevAreaMedicaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotDevAreaMedicaRoutingModule { }
