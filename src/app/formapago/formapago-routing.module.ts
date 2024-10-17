import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { FormaPagoSIUucrearComponent } from './siu_crear.component';
import { FormaPagoSIUumodificarComponent } from './siu_modificar.component';
import { FormaPagoPIUuFormaPagoComponent } from './piu_formapago.component';

const routes: Routes = [
    { path: 'siu_crear' , component: FormaPagoSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: FormaPagoSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_formapago' , component: FormaPagoPIUuFormaPagoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormaPagoRoutingModule { }
