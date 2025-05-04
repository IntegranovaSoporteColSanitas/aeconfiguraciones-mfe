import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ParamConfigRoutingModule } from './paramconfig-routing.module';
import { ParamConfigSIUucrearComponent } from './siu_crear.component';
import { ParamConfigSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { ParamConfigMDIUuParamConfigComponent } from './mdiu_paramconfig.component';
import { ParamConfigPIUuParamConfigComponent } from './piu_paramconfig.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ParamConfigRoutingModule
  ],
  declarations: [
    ParamConfigSIUucrearComponent,
    ParamConfigSIUuTMODIFICARComponent,
    ParamConfigMDIUuParamConfigComponent,
    ParamConfigPIUuParamConfigComponent
  ],
  exports: [
    ParamConfigSIUucrearComponent,
    ParamConfigSIUuTMODIFICARComponent,
    ParamConfigMDIUuParamConfigComponent,
    ParamConfigPIUuParamConfigComponent
  ]
})
export class ParamConfigModule { }
