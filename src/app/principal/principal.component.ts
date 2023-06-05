import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private router: Router) {
  }
  goToClientes() {
    this.router.navigate(['/', 'clientes']);
  }
  goToBodegas() {
    this.router.navigate(['/', 'bodegas']);
  }
  goToPuertos() {
    this.router.navigate(['/', 'puertos']);
  }
  goToProductos() {
    this.router.navigate(['/', 'productos']);
  }
  goToLogisticaMaritima() {
    this.router.navigate(['/', 'logistica-maritima']);
  }
  goToLogisticaTerrestre() {
    this.router.navigate(['/', 'logistica-terrestre']);
  }

}


