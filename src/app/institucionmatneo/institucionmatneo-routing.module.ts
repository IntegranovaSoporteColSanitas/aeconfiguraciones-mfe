import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { InstitucionMatNeoSIUucrearComponent } from './siu_crear.component';
import { InstitucionMatNeoSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { InstitucionMatNeoPIUuInstitucionMatNeoComponent } from './piu_institucionmatneo.component';

const routes: Routes = [
    { path: 'siu_crear' , component: InstitucionMatNeoSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: InstitucionMatNeoSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_institucionmatneo' , component: InstitucionMatNeoPIUuInstitucionMatNeoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionMatNeoRoutingModule { }
