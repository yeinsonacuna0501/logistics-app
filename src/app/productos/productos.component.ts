import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  items: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerItems();
  }

  obtenerItems() {
    this.http.get('https://localhost:7206/api/tiposProductos').subscribe((response: any) => {
      this.items = response;
    }, error => {
      console.error('Error al obtener los elementos:', error);
    });
  }
}