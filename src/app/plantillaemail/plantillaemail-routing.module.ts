import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PlantillaEmailSIUumodificarComponent } from './siu_modificar.component';
import { PlantillaEmailSIUumodificarTextoMensajeComponent } from './siu_modificartextomensaje.component';
import { PlantillaEmailSIUudummyModificarComponent } from './siu_dummymodificar.component';
import { PlantillaEmailSIUuTNEWComponent } from './siu_tnew.component';
import { PlantillaEmailPIUuPlantillaEmailComponent } from './piu_plantillaemail.component';

const routes: Routes = [
    { path: 'siu_modificar' , component: PlantillaEmailSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificartextomensaje' , component: PlantillaEmailSIUumodificarTextoMensajeComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_dummymodificar' , component: PlantillaEmailSIUudummyModificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tnew' , component: PlantillaEmailSIUuTNEWComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_plantillaemail' , component: PlantillaEmailPIUuPlantillaEmailComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantillaEmailRoutingModule { }
