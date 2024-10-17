import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ContSinDocSolSIUucrearComponent } from './siu_crear.component';
import { ContSinDocSolPIUuContSinDocSolComponent } from './piu_contsindocsol.component';

const routes: Routes = [
    { path: 'siu_crear' , component: ContSinDocSolSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_contsindocsol' , component: ContSinDocSolPIUuContSinDocSolComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContSinDocSolRoutingModule { }
