import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogContSinDocSolPIUuLogContSinDocSolComponent } from './piu_logcontsindocsol.component';

const routes: Routes = [
    { path: 'piu_logcontsindocsol' , component: LogContSinDocSolPIUuLogContSinDocSolComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogContSinDocSolRoutingModule { }
