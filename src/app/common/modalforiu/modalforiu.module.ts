import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalForIUComponent } from './modalforiu.component';
import { DialogModule } from 'primeng/dialog';
import { CommonComponentsModule } from '../../commoncomponents.module';
import { RolModule } from '../../rol/rol.module';
import { ProrrateoModule } from '../../prorrateo/prorrateo.module';
import { TipoFacturaModule } from '../../tipofactura/tipofactura.module';
import { GlobalServicesModule } from '../../globalservices/globalservices.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DialogModule,
    RolModule,
    ProrrateoModule,
    TipoFacturaModule,
    GlobalServicesModule
  ],
  declarations: [
    ModalForIUComponent
  ],
  exports: [ModalForIUComponent]
})
export class ModalForIUModule { }
