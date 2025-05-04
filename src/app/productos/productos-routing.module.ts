import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ProductosSIUucrearComponent } from './siu_crear.component';
import { ProductosSIUumodificarComponent } from './siu_modificar.component';
import { ProductosPIUuProductoComponent } from './piu_producto.component';
import { ProductosPIUuProductosuObsComponent } from './piu_productos_obs.component';

const routes: Routes = [
    { path: 'siu_crear' , component: ProductosSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: ProductosSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_producto' , component: ProductosPIUuProductoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_productos_obs' , component: ProductosPIUuProductosuObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
