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
  constructor(
    private apiInfRestaurante: ApiInfRestauranteService,
    private apiSede: ApiSedeService,
    public  dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
   this.getInfRestaurante();
   this.getSede();
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

}
