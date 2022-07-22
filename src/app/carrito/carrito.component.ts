import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
public lst:any[]=[];
  constructor(private carrito : CarritoService) { }

  ngOnInit(): void {
    this.lst=this.carrito.listarCarrito();

  }

}
