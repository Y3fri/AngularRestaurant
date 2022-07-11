import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './Models/usuario';
import { ApiAuth } from './services/apiAuth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant';
  usuario : Usuario | undefined ;
  
  constructor( public apiauth: ApiAuth,
    private router :Router
    ){
      this.apiauth.usuario.subscribe(res =>{
        this.usuario = res;
        console.log('cambio el objeto ' +res);
      });
}
logout(){
  this.apiauth.logout();
  this.router.navigate(['/login']);
}

}
