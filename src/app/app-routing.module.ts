import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BodegasComponent } from './bodegas/bodegas.component';
import { PuertosComponent } from './puertos/puertos.component';
import { ProductosComponent } from './productos/productos.component';
import { LogisticaMaritimaComponent } from './logistica-maritima/logistica-maritima.component';
import { LogisticaTerrestreComponent } from './logistica-terrestre/logistica-terrestre.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  { path: 'principal', component: PrincipalComponent, },
  { path: 'clientes', component: ClientesComponent, },
  { path: 'bodegas', component: BodegasComponent, },
  { path: 'puertos', component: PuertosComponent, },
  { path: 'productos', component: ProductosComponent, },
  { path: 'logistica-maritima', component: LogisticaMaritimaComponent, },
  { path: 'logistica-terrestre', component: LogisticaTerrestreComponent, },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
