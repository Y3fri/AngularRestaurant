import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './Models/usuario';
import { ApiAuth } from './services/apiAuth';
import { ApiInfRestauranteService } from './services/apiInfRestaurante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restaurant';
  usuario : Usuario | undefined ;
  public lst:any[]=[];
  
  constructor( public apiauth: ApiAuth,
    private apiInfRestaurante : ApiInfRestauranteService,
    private router :Router
    ){
      this.apiauth.usuario.subscribe(res =>{
        this.usuario = res;
        console.log('cambio el objeto ' +res);
      });
}
ngOnInit(): void {
  this.getInfRestaurante();
}
getInfRestaurante(){
  this.apiInfRestaurante.getInfRestaurante().subscribe(response =>{
    this.lst = response.data;
  });
}
logout(){
  this.apiauth.logout();
  this.router.navigate(['/login']);
}

}
