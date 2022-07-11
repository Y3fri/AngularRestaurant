import { Component, OnInit } from '@angular/core';
import { ApiMenuProductoService } from '../services/apiMenuProducto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lst : any[]=[];
  constructor(
    private apiMenuProducto:ApiMenuProductoService
  ) { }

  ngOnInit(): void {
    this.getMenuProducto();
  }

  getMenuProducto(){
    this.apiMenuProducto.getMenuProducto().subscribe(response =>{
     this.lst=response.data;
    });
  }
}
