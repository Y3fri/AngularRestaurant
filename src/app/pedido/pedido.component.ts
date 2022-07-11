import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../Common/delete/dialogdelete.component';
import { PedidoEstado } from '../Models/pedidoEstado';
import { PedidoInformacion } from '../Models/pedidoInformacion';
import { PedidoProducto } from '../Models/pedidoProducto';
import { PedidoTipo } from '../Models/pedidoTipo';
import { PedidoTipoPago } from '../Models/pedidoTipoPago';
import { ApiPedidoEstadoService } from '../services/apipedidoEstado';
import { ApiPedidoInformacionService } from '../services/apipedidoInfomacion';
import { ApiPedidoProductoService } from '../services/apipedidoProducto';
import { ApiPedidoTipoService } from '../services/apipedidoTipo';
import { ApiPedidoTipoPagoService } from '../services/apipedidoTipoPago';
import { DialogPedidoEstadoComponent } from './dialog/dialogpedidoEstado';
import { DialogPedidoInformacionComponent } from './dialog/dialogpedidoInformacion';
import { DialogPedidoProductoComponent } from './dialog/dialogpedidoProducto';
import { DialogPedidoTipoComponent } from './dialog/dialogpedidoTipo';
import { DialogPedidoTipoPagoComponent } from './dialog/dialogpedidoTipoPago';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public lst: any[] =[];
  public columnas : string[] = ['id','nombre','descripcion','estado','actions'];
  public lst1: any[] =[];
  public columnas1 : string[] = ['id','nombre','descripcion','estado','actions'];
  public lst2: any[] =[];
  public columnas2 : string[] = ['id','nombre','descripcion','estado','actions'];
  public lst3: any[] =[];
  public columnas3 : string[] = ['id','producto','estado','solicitud','actions'];
  public lst4: any[] =[];
  public columnas4 : string[] = ['id','tipo','municipio','tipopago','estado','nombre','direccion','telefono','piso','mesa','actions'];
 readonly width: string = '300'
 
  constructor(
    private apiPedidoTipo: ApiPedidoTipoService,
    private apiPedidoTipoPago: ApiPedidoTipoPagoService,
    private apiPedidoEstado: ApiPedidoEstadoService,
    private apiPedidoProducto:ApiPedidoProductoService,
    private apiPedidoInformacion:ApiPedidoInformacionService,
    public  dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getPedidoTipo();
    this.getPedidoTipoPago();
    this.getPedidoEstado();
    this.getPedidoInformacion();
    this.getPedidoProducto();
  }
//Pedido Tipo
getPedidoTipo(){
  this.apiPedidoTipo.getPedidoTipo().subscribe(response =>{
    this.lst = response.data;
  });
}


openAddPedidoTipo(){
  const dialogRef = this.dialog.open(DialogPedidoTipoComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoTipo();
});
}

openEditPedidoTipo(pedidoTipo : PedidoTipo){
const dialogRef = this.dialog.open(DialogPedidoTipoComponent,{
  width: this.width,
  data:pedidoTipo
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoTipo();
})
}

deletePedidoTipo(pedidoTipo : PedidoTipo){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiPedidoTipo.Delete(pedidoTipo.tipId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getPedidoTipo();
      }
    });
  }
});
}

//Pedido Tipo Pago

getPedidoTipoPago(){
  this.apiPedidoTipoPago.getPedidoTipoPago().subscribe(response =>{
    this.lst1 = response.data;
  });
}


openAddPedidoTipoPago(){
  const dialogRef = this.dialog.open(DialogPedidoTipoPagoComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoTipoPago();
});
}

openEditPedidoTipoPago(pedidoTipoPago : PedidoTipoPago){
const dialogRef = this.dialog.open(DialogPedidoTipoPagoComponent,{
  width: this.width,
  data:pedidoTipoPago
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoTipoPago();
})
}

deletePedidoTipoPago(pedidoTipoPago : PedidoTipoPago){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiPedidoTipoPago.Delete(pedidoTipoPago.tipaId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getPedidoTipoPago();
      }
    });
  }
});
}

//Pedido Estado

getPedidoEstado(){
  this.apiPedidoEstado.getPedidoEstado().subscribe(response =>{
    this.lst2 = response.data;
  });
}


openAddPedidoEstado(){
  const dialogRef = this.dialog.open(DialogPedidoEstadoComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoEstado();
});
}

openEditPedidoEstado(pedidoEstado : PedidoEstado){
const dialogRef = this.dialog.open(DialogPedidoEstadoComponent,{
  width: this.width,
  data:pedidoEstado
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoEstado();
})
}

deletePedidoEstado(pedidoEstado : PedidoEstado){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiPedidoEstado.Delete(pedidoEstado.estId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getPedidoTipoPago();
      }
    });
  }
});
}

//Pedido Producto

getPedidoProducto(){
  this.apiPedidoProducto.getPedidoProducto().subscribe(response =>{
    this.lst3 = response.data;
  });
}


openAddPedidoProducto(){
  const dialogRef = this.dialog.open(DialogPedidoProductoComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoProducto();
});
}

openEditPedidoProducto(pedidoProducto : PedidoProducto){
const dialogRef = this.dialog.open(DialogPedidoProductoComponent,{
  width: this.width,
  data:pedidoProducto
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoProducto();
})
}

deletePedidoProducto(pedidoProducto: PedidoProducto){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiPedidoProducto.Delete(pedidoProducto.proId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getPedidoProducto();
      }
    });
  }
});
}

//Pedido Informacion

getPedidoInformacion(){
  this.apiPedidoInformacion.getPedidoInformacion().subscribe(response =>{
    this.lst4 = response.data;
  });
}


openAddPedidoInformacion(){
  const dialogRef = this.dialog.open(DialogPedidoInformacionComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoInformacion();
});
}

openEditPedidoInformacion(pedidoInformacion : PedidoInformacion){
const dialogRef = this.dialog.open(DialogPedidoInformacionComponent,{
  width: this.width,
  data:pedidoInformacion
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getPedidoInformacion();
})
}

deletePedidoInformacion(pedidoInformacion: PedidoInformacion){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiPedidoInformacion.Delete(pedidoInformacion.infId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getPedidoInformacion();
      }
    });
  }
});
}
}

