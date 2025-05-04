import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PlantillaEmailRoutingModule } from './plantillaemail-routing.module';
import { PlantillaEmailSIUumodificarComponent } from './siu_modificar.component';
import { PlantillaEmailSIUumodificarTextoMensajeComponent } from './siu_modificartextomensaje.component';
import { PlantillaEmailSIUudummyModificarComponent } from './siu_dummymodificar.component';
import { PlantillaEmailSIUuTNEWComponent } from './siu_tnew.component';
import { PlantillaEmailPIUuPlantillaEmailComponent } from './piu_plantillaemail.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PlantillaEmailRoutingModule
  ],
  declarations: [
    PlantillaEmailSIUumodificarComponent,
    PlantillaEmailSIUumodificarTextoMensajeComponent,
    PlantillaEmailSIUudummyModificarComponent,
    PlantillaEmailSIUuTNEWComponent,
    PlantillaEmailPIUuPlantillaEmailComponent
  ],
  exports: [
    PlantillaEmailSIUumodificarComponent,
    PlantillaEmailSIUumodificarTextoMensajeComponent,
    PlantillaEmailSIUudummyModificarComponent,
    PlantillaEmailSIUuTNEWComponent,
    PlantillaEmailPIUuPlantillaEmailComponent
  ]
})
export class PlantillaEmailModule { }
