import { Injectable } from '@angular/core';
import { MenuProducto } from '../Models/menuProducto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  public lst:any[]=[];

  constructor() { }

  agregarCarrito(producto: MenuProducto){ 
        this.lst.push(producto);
       
  }

  LimpiarCarrito(){
      this.lst=[];
      return this.lst;
  }

  listarCarrito(){
      return this.lst;
  }
}
