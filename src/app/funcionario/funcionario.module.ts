import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioSIUuInsReporteFuncionarioComponent } from './siu_insreportefuncionario.component';
import { FuncionarioSIUuDelReporteFuncionarioComponent } from './siu_delreportefuncionario.component';
import { FuncionarioPIUuFuncionariouGrupoUsuariosComponent } from './piu_funcionario_grupousuarios.component';
import { FuncionarioPIUuFuncionariouObsComponent } from './piu_funcionario_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FuncionarioRoutingModule
  ],
  declarations: [
    FuncionarioSIUuInsReporteFuncionarioComponent,
    FuncionarioSIUuDelReporteFuncionarioComponent,
    FuncionarioPIUuFuncionariouGrupoUsuariosComponent,
    FuncionarioPIUuFuncionariouObsComponent
  ],
  exports: [
    FuncionarioSIUuInsReporteFuncionarioComponent,
    FuncionarioSIUuDelReporteFuncionarioComponent,
    FuncionarioPIUuFuncionariouGrupoUsuariosComponent,
    FuncionarioPIUuFuncionariouObsComponent
  ]
})
export class FuncionarioModule { }
