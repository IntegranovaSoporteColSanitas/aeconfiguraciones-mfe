import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TextoAvisoRoutingModule } from './textoaviso-routing.module';
import { TextoAvisoSIUucrearComponent } from './siu_crear.component';
import { TextoAvisoSIUumodificarComponent } from './siu_modificar.component';
import { TextoAvisoPIUuTextoAvisoComponent } from './piu_textoaviso.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TextoAvisoRoutingModule
  ],
  declarations: [
    TextoAvisoSIUucrearComponent,
    TextoAvisoSIUumodificarComponent,
    TextoAvisoPIUuTextoAvisoComponent
  ],
  exports: [
    TextoAvisoSIUucrearComponent,
    TextoAvisoSIUumodificarComponent,
    TextoAvisoPIUuTextoAvisoComponent
  ]
})
export class TextoAvisoModule { }
