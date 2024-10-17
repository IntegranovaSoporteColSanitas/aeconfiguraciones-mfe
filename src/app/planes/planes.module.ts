import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PlanesRoutingModule } from './planes-routing.module';
import { PlanesSIUucrearComponent } from './siu_crear.component';
import { PlanesSIUumodificarComponent } from './siu_modificar.component';
import { PlanesPIUuPlanComponent } from './piu_plan.component';
import { PlanesPIUuPlanesuObsComponent } from './piu_planes_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PlanesRoutingModule
  ],
  declarations: [
    PlanesSIUucrearComponent,
    PlanesSIUumodificarComponent,
    PlanesPIUuPlanComponent,
    PlanesPIUuPlanesuObsComponent
  ],
  exports: [
    PlanesSIUucrearComponent,
    PlanesSIUumodificarComponent,
    PlanesPIUuPlanComponent,
    PlanesPIUuPlanesuObsComponent
  ]
})
export class PlanesModule { }
