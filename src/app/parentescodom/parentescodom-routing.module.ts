import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ParentescoDomSIUucrearComponent } from './siu_crear.component';
import { ParentescoDomSIUumodificarComponent } from './siu_modificar.component';
import { ParentescoDomPIUuParentescoDomComponent } from './piu_parentescodom.component';

const routes: Routes = [
    { path: 'siu_crear' , component: ParentescoDomSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: ParentescoDomSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_parentescodom' , component: ParentescoDomPIUuParentescoDomComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentescoDomRoutingModule { }
