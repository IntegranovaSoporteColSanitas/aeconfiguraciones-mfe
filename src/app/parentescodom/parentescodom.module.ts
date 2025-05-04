import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ParentescoDomRoutingModule } from './parentescodom-routing.module';
import { ParentescoDomSIUucrearComponent } from './siu_crear.component';
import { ParentescoDomSIUumodificarComponent } from './siu_modificar.component';
import { ParentescoDomPIUuParentescoDomComponent } from './piu_parentescodom.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ParentescoDomRoutingModule
  ],
  declarations: [
    ParentescoDomSIUucrearComponent,
    ParentescoDomSIUumodificarComponent,
    ParentescoDomPIUuParentescoDomComponent
  ],
  exports: [
    ParentescoDomSIUucrearComponent,
    ParentescoDomSIUumodificarComponent,
    ParentescoDomPIUuParentescoDomComponent
  ]
})
export class ParentescoDomModule { }
