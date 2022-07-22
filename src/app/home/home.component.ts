import { Component, OnInit } from '@angular/core';
import { ApiMenuProductoService } from '../services/apiMenuProducto';
import{ CarritoService}from '../services/carrito.service';
import { MenuProducto } from '../Models/menuProducto';
import { ApiColorService } from '../services/apiColor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lst : any[]=[];
  
  lst2 : any[]=[];


  constructor(
    private apiMenuProducto:ApiMenuProductoService,
    private apiColor:ApiColorService,
    private carrito: CarritoService,
  ) { }

  ngOnInit(): void {
    this.getMenuProducto();
    this.getColor();
  }
getColor(){
  this.apiColor.getColor().subscribe(response =>{
    this.lst2 = response.data;
  });
}
  getMenuProducto(){
    this.apiMenuProducto.getMenuProducto().subscribe(response =>{
     this.lst=response.data;
    });
  }
  agregarCarrito(producto: MenuProducto){
    this.carrito.agregarCarrito(producto);
  }
}
