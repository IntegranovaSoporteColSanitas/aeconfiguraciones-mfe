import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ParentescoSIUucrearComponent } from './siu_crear.component';
import { ParentescoSIUumodificarComponent } from './siu_modificar.component';
import { ParentescoPIUuParentescoComponent } from './piu_parentesco.component';

const routes: Routes = [
    { path: 'siu_crear' , component: ParentescoSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: ParentescoSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_parentesco' , component: ParentescoPIUuParentescoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentescoRoutingModule { }
