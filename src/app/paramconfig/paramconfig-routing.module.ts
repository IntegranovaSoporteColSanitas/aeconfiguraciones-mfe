import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ParamConfigSIUucrearComponent } from './siu_crear.component';
import { ParamConfigSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { ParamConfigMDIUuParamConfigComponent } from './mdiu_paramconfig.component';
import { ParamConfigPIUuParamConfigComponent } from './piu_paramconfig.component';

const routes: Routes = [
    { path: 'siu_crear' , component: ParamConfigSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: ParamConfigSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_paramconfig' , component: ParamConfigMDIUuParamConfigComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_paramconfig' , component: ParamConfigPIUuParamConfigComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamConfigRoutingModule { }
