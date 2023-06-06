import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-puertos',
  templateUrl: './puertos.component.html',
  styleUrls: ['./puertos.component.css']
})

export class PuertosComponent implements OnInit {
  items: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerItems();
  }

  obtenerItems() {
    this.http.get('https://localhost:7206/api/puertos').subscribe((response: any) => {
      this.items = response;
    }, error => {
      console.error('Error al obtener los elementos:', error);
    });
  }
}
