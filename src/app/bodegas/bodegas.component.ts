import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})


export class BodegasComponent implements OnInit {
  items: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) { }

  @ViewChild('myModal') myModal!: ElementRef;

  ngOnInit() {
    this.obtenerItems();
  }

  openModal() {
    this.myModal.nativeElement.modal('show');
  }
  

  obtenerItems() {
    this.http.get('https://localhost:7206/api/bodegas').subscribe((response: any) => {
      this.items = response;
    }, error => {
      console.error('Error al obtener los elementos:', error);
    });
  }
}