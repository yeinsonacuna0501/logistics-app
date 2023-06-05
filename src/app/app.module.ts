import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BodegasComponent } from './bodegas/bodegas.component';
import { PuertosComponent } from './puertos/puertos.component';
import { ProductosComponent } from './productos/productos.component';
import { LogisticaMaritimaComponent } from './logistica-maritima/logistica-maritima.component';
import { LogisticaTerrestreComponent } from './logistica-terrestre/logistica-terrestre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ClientesComponent,
    BodegasComponent,
    PuertosComponent,
    ProductosComponent,
    LogisticaMaritimaComponent,
    LogisticaTerrestreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
