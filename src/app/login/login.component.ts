import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  {
  username: string='';
  password: string='';

  constructor(private http: HttpClient,private router: Router) { }
  

  onSubmit() {
    // Aquí debes realizar la llamada a la API .NET para autenticar al usuario
    const loginData = {
      nombreUsuario: this.username,
      password: this.password
    };
  

    this.http.post('https://localhost:7206/api/usuarios/login', loginData)
      .subscribe((response: any) => {
  // Desestructurar los parámetros de respuesta
    const token = response.result.token;

      // Guardar el token en el almacenamiento local o realizar otras acciones
      localStorage.setItem('token', token);
      console.log('Token:', token);
      
      //Redigir a la pagina principal
      this.router.navigate(['/clientes']);

    }, error => {
      // Manejar el error de la API
      console.error('Error en la API:', error);
    });


    
  }
}