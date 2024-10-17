import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PlantillaReportePIUuPlantillaReporteComponent } from './piu_plantillareporte.component';

const routes: Routes = [
    { path: 'piu_plantillareporte' , component: PlantillaReportePIUuPlantillaReporteComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantillaReporteRoutingModule { }
