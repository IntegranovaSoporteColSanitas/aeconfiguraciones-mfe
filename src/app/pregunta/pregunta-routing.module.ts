import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PreguntaSIUuInsValorPreguntaComponent } from './siu_insvalorpregunta.component';
import { PreguntaSIUuDelValorPreguntaComponent } from './siu_delvalorpregunta.component';
import { PreguntaSIUuTCREARComponent } from './siu_tcrear.component';
import { PreguntaSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { PreguntaIIUuPreguntaComponent } from './iiu_pregunta.component';
import { PreguntaPIUuPreguntaComponent } from './piu_pregunta.component';

const routes: Routes = [
    { path: 'siu_insvalorpregunta' , component: PreguntaSIUuInsValorPreguntaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_delvalorpregunta' , component: PreguntaSIUuDelValorPreguntaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrear' , component: PreguntaSIUuTCREARComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: PreguntaSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'iiu_pregunta' , component: PreguntaIIUuPreguntaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_pregunta' , component: PreguntaPIUuPreguntaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntaRoutingModule { }
