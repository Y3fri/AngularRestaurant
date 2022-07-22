import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ApiInfRestauranteService } from '../services/apiInfRestaurante';
import { InfRestaurante } from '../Models/infRestaurante';
import { DialogInfRestauranteComponent } from './dialog/dialogInfRestaurant.component';
import { DialogDeleteComponent } from '../Common/delete/dialogdelete.component';
import { ApiSedeService } from '../services/apiSede';
import { Sede } from '../Models/sede';
import { DialogSedeComponent } from './dialog/dialogSede';
import { ApiColorService } from '../services/apiColor';
import { Color } from '../Models/color';
import { DialogColorComponent } from './dialog/dialogColor';

@Component({
  selector: 'app-inf-restaurante',
  templateUrl: './inf-restaurante.component.html',
  styleUrls: ['./inf-restaurante.component.css']
})
export class InfRestauranteComponent implements OnInit {
  public lst: any[] =[];
  public columnas : string[] = ['id','municipio','nit','razon','email','direccion','telefono','logo','actions'];
  readonly width: string = '300'
  public lst1: any[] =[];
  public columnas1 : string[] = ['id','inf','email','direccion','telefono','ubicacion','actions'];
  public lst2: any[] =[];
  public columnas2 : string[] = ['id','restaurante','fondo','encabezado','fuente','titulos','titulosEn','titulosMe','conte','actions'];
  constructor(
    private apiInfRestaurante: ApiInfRestauranteService,
    private apiSede: ApiSedeService,
    private apiColor: ApiColorService,
    public  dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
   this.getInfRestaurante();
   this.getSede();
   this.getColor();
  }
  getInfRestaurante(){
    this.apiInfRestaurante.getInfRestaurante().subscribe(response =>{
      this.lst = response.data;
    });
  }


 openEditInf(InfRes: InfRestaurante){
  const dialogRef = this.dialog.open(DialogInfRestauranteComponent,{
    width: this.width,
    data:InfRes
  });
  dialogRef.afterClosed().subscribe(resul=>{
    this.getInfRestaurante();
  })
}



getSede(){
  this.apiSede.getSede().subscribe(response =>{
    this.lst1 = response.data;
  });
}
openAddSede(){
  const dialogRef = this.dialog.open(DialogSedeComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getSede();
});
}

openEditSede(sede : Sede){
const dialogRef = this.dialog.open(DialogSedeComponent,{
  width: this.width,
  data:sede
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getSede();
})
}

deleteSede(sede : Sede){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiSede.Delete(sede.sedId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getSede();
      }
    });
  }
});
}


getColor(){
  this.apiColor.getColor().subscribe(response =>{
    this.lst2 = response.data;
  });
}
openAddColor(){
  const dialogRef = this.dialog.open(DialogColorComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getColor();
});
}

openEditColor(color : Color){
const dialogRef = this.dialog.open(DialogColorComponent,{
  width: this.width,
  data:color
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getColor();
})
}

deleteColor(color : Color){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiColor.Delete(color.colId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getColor();
      }
    });
  }
});
}
}
