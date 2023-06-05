import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  items: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerItems();
  }

  obtenerItems() {
    this.http.get('https://localhost:7206/api/clientes').subscribe((response: any) => {
      this.items = response;
    }, error => {
      console.error('Error al obtener los elementos:', error);
    });
  }
}
