import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { RegionalSIUucrearComponent } from './siu_crear.component';
import { RegionalPIUuRegionalComponent } from './piu_regional.component';
import { RegionalPIUuRegionaluObsComponent } from './piu_regional_obs.component';

const routes: Routes = [
    { path: 'siu_crear' , component: RegionalSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_regional' , component: RegionalPIUuRegionalComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_regional_obs' , component: RegionalPIUuRegionaluObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionalRoutingModule { }
