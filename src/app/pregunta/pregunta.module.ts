import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PreguntaRoutingModule } from './pregunta-routing.module';
import { PreguntaSIUuInsValorPreguntaComponent } from './siu_insvalorpregunta.component';
import { PreguntaSIUuDelValorPreguntaComponent } from './siu_delvalorpregunta.component';
import { PreguntaSIUuTCREARComponent } from './siu_tcrear.component';
import { PreguntaSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { PreguntaIIUuPreguntaComponent } from './iiu_pregunta.component';
import { PreguntaPIUuPreguntaComponent } from './piu_pregunta.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PreguntaRoutingModule
  ],
  declarations: [
    PreguntaSIUuInsValorPreguntaComponent,
    PreguntaSIUuDelValorPreguntaComponent,
    PreguntaSIUuTCREARComponent,
    PreguntaSIUuTMODIFICARComponent,
    PreguntaIIUuPreguntaComponent,
    PreguntaPIUuPreguntaComponent
  ],
  exports: [
    PreguntaSIUuInsValorPreguntaComponent,
    PreguntaSIUuDelValorPreguntaComponent,
    PreguntaSIUuTCREARComponent,
    PreguntaSIUuTMODIFICARComponent,
    PreguntaIIUuPreguntaComponent,
    PreguntaPIUuPreguntaComponent
  ]
})
export class PreguntaModule { }
