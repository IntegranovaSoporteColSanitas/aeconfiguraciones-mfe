import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TextoAvisoSIUucrearComponent } from './siu_crear.component';
import { TextoAvisoSIUumodificarComponent } from './siu_modificar.component';
import { TextoAvisoPIUuTextoAvisoComponent } from './piu_textoaviso.component';

const routes: Routes = [
    { path: 'siu_crear' , component: TextoAvisoSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: TextoAvisoSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_textoaviso' , component: TextoAvisoPIUuTextoAvisoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextoAvisoRoutingModule { }
