import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EntidadFinancieraCSIUucrearComponent } from './siu_crear.component';
import { EntidadFinancieraCPIUuEntidadFinancieraComponent } from './piu_entidadfinanciera.component';

const routes: Routes = [
    { path: 'siu_crear' , component: EntidadFinancieraCSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_entidadfinanciera' , component: EntidadFinancieraCPIUuEntidadFinancieraComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadFinancieraCRoutingModule { }
