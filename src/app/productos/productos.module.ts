import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosSIUucrearComponent } from './siu_crear.component';
import { ProductosSIUumodificarComponent } from './siu_modificar.component';
import { ProductosPIUuProductoComponent } from './piu_producto.component';
import { ProductosPIUuProductosuObsComponent } from './piu_productos_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProductosRoutingModule
  ],
  declarations: [
    ProductosSIUucrearComponent,
    ProductosSIUumodificarComponent,
    ProductosPIUuProductoComponent,
    ProductosPIUuProductosuObsComponent
  ],
  exports: [
    ProductosSIUucrearComponent,
    ProductosSIUumodificarComponent,
    ProductosPIUuProductoComponent,
    ProductosPIUuProductosuObsComponent
  ]
})
export class ProductosModule { }
