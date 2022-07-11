import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DialogDeleteComponent } from 'src/app/Common/delete/dialogdelete.component';
import { Municipio } from 'src/app/Models/municipio';
import { ApiMaestroMunicipioService } from 'src/app/services/apimaestroMunicipio';
import { DialogMunicipioComponent } from '../dialog/dialogMunicipio';


@Component({
  selector: 'app-maestro',
  templateUrl: './Municipio.component.html',
 
})
export class MunicipioComponent implements OnInit {

  public lst2:any[]=[];
  public columnas2 : string[] = ['id','departamento','codigo','nombre','actions'];
 readonly width: string = '300'


  constructor(
    private apiMaestroMunicipio: ApiMaestroMunicipioService,
    public  dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }


  
  ngOnInit(): void {
  
   this.getMaestroMunicipio();
   

  }

  getMaestroMunicipio(){
    this.apiMaestroMunicipio.getMaestroMunicipio().subscribe(response =>{
      this.lst2 = response.data;
    });
  }
  openAddMunicipio(){
    const dialogRef = this.dialog.open(DialogMunicipioComponent,{

    });
  
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMaestroMunicipio();
  });
 }

 openEditMunicipio(municipio: Municipio){
  const dialogRef = this.dialog.open(DialogMunicipioComponent,{
    width: this.width,
    data:municipio
  });
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMaestroMunicipio();
  })
}

deleteMunicipio(municipio: Municipio){
  const dialogRef = this.dialog.open(DialogDeleteComponent,{
    width: this.width
  });
  dialogRef.afterClosed().subscribe(resul=>{
    if(resul){
      this.apiMaestroMunicipio.Delete(municipio.munId).subscribe(response=>{
        if(response.exito ==1){
          this.snackBar.open('Cliente eliminado con exito','',{
            duration:2000
          });
                this.getMaestroMunicipio();
        }
      });
    }
  });
}
}

