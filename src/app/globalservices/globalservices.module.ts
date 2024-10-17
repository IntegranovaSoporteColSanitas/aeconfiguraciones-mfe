import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GlobalServicesRoutingModule } from './globalservices-routing.module';
import { GSSIUuTGCREARTARIFAComponent } from './siu_tgcreartarifa.component';
import { GSSIUuTGCREARCOMBOComponent } from './siu_tgcrearcombo.component';
import { GSSIUuTGEDITARCOMBOComponent } from './siu_tgeditarcombo.component';
import { GSSIUuTGADDPLANTREPComponent } from './siu_tgaddplantrep.component';
import { GSSIUuTGEDITPLANTREPComponent } from './siu_tgeditplantrep.component';
import { GSSIUuTGCREARFINIEPSComponent } from './siu_tgcrearfinieps.component';
import { GSSIUuTGMODFINIEPSComponent } from './siu_tgmodfinieps.component';
import { GSSIUuTGCREARCONTEXENTOComponent } from './siu_tgcrearcontexento.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GlobalServicesRoutingModule
  ],
  declarations: [
    GSSIUuTGCREARTARIFAComponent,
    GSSIUuTGCREARCOMBOComponent,
    GSSIUuTGEDITARCOMBOComponent,
    GSSIUuTGADDPLANTREPComponent,
    GSSIUuTGEDITPLANTREPComponent,
    GSSIUuTGCREARFINIEPSComponent,
    GSSIUuTGMODFINIEPSComponent,
    GSSIUuTGCREARCONTEXENTOComponent
  ],
  exports: [
    GSSIUuTGCREARTARIFAComponent,
    GSSIUuTGCREARCOMBOComponent,
    GSSIUuTGEDITARCOMBOComponent,
    GSSIUuTGADDPLANTREPComponent,
    GSSIUuTGEDITPLANTREPComponent,
    GSSIUuTGCREARFINIEPSComponent,
    GSSIUuTGMODFINIEPSComponent,
    GSSIUuTGCREARCONTEXENTOComponent
  ]
})
export class GlobalServicesModule { }
