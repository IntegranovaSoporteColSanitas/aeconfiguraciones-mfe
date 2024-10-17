import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { MunicipioSIUucrearComponent } from './siu_crear.component';
import { MunicipioSIUumodificarComponent } from './siu_modificar.component';
import { MunicipioPIUuMunicipioComponent } from './piu_municipio.component';

const routes: Routes = [
    { path: 'siu_crear' , component: MunicipioSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: MunicipioSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_municipio' , component: MunicipioPIUuMunicipioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunicipioRoutingModule { }
