import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogDeleteComponent } from 'src/app/Common/delete/dialogdelete.component';
import { Departamento } from 'src/app/Models/departamento';
import { ApiMaestroDepartamentoService } from 'src/app/services/apimaestroDepartamento';
import { DialogDepartamentoComponent } from '../dialog/dialogDepartamento';



@Component({
  selector: 'app-maestro',
  templateUrl: './Departamento.component.html',
})
export class DepartamentoComponent implements OnInit {


  public lst1: any[] =[];
  public columnas1 : string[] = ['id','pais','codigo','nombre','actions'];
 readonly width: string = '3000'


  constructor(
    private apiMaestroDepartamento: ApiMaestroDepartamentoService,
    private router:Router, 
    public  dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
   
   this.getMaestroDepartamento();
   

  }


  getMaestroDepartamento(){
    this.apiMaestroDepartamento.getMaestroDepartamento().subscribe(response =>{
      this.lst1 = response.data;
    });
  }
  openAddDepartamento(){
    const dialogRef = this.dialog.open(DialogDepartamentoComponent,{

    });
  
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMaestroDepartamento();
  });
 }

 openEditDepartamento(departamento: Departamento){
  const dialogRef = this.dialog.open(DialogDepartamentoComponent,{
    width: this.width,
    data:departamento
  });
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMaestroDepartamento();
  })
}

deleteDepartamento(departamento: Departamento){
  const dialogRef = this.dialog.open(DialogDeleteComponent,{
    width: this.width
  });
  dialogRef.afterClosed().subscribe(resul=>{
    if(resul){
      this.apiMaestroDepartamento.Delete(departamento.depId).subscribe(response=>{
        if(response.exito ==1){
          this.snackBar.open('Cliente eliminado con exito','',{
            duration:2000
          });
                this.getMaestroDepartamento();
        }
      });
    }
  });
}

  
}

