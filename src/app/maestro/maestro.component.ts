import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogDeleteComponent } from '../Common/delete/dialogdelete.component';
import { Departamento } from '../Models/departamento';
import { Municipio } from '../Models/municipio';
import { Pais } from '../Models/pais';
import { ApiMaestroDepartamentoService } from '../services/apimaestroDepartamento';

import { ApiMaestroPaisService } from '../services/apimaestroPais';
import { DialogDepartamentoComponent } from './dialog/dialogDepartamento';
import { DialogMunicipioComponent } from './dialog/dialogMunicipio';
import { DialogPaisComponent } from './dialog/dialogPais';
import { MunicipioComponent } from './Municipio/Municipio.component';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})
export class MaestroComponent implements OnInit {

  public lst: any[] =[];
  public columnas : string[] = ['id','pais','actions'];
 readonly width: string = '3000'


  constructor(
    private apiMaestroPais: ApiMaestroPaisService,
    private apiMaestroDepartamento: ApiMaestroDepartamentoService,
    private router:Router, 
    public  dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
   
   this.getMaestroPais();
   

  }


  getMaestroPais(){
  
       this.apiMaestroPais.getMaestroPais().subscribe(response =>{
      this.lst = response.data;
        
    });
  }

  openAddPais(){
    const dialogRef = this.dialog.open(DialogPaisComponent,{

    });
  
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMaestroPais();
  });
 }

 openEditPais(pais: Pais){
  const dialogRef = this.dialog.open(DialogPaisComponent,{
    width: this.width,
    data:pais
  });
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMaestroPais();
  })
}

detailsPais(id: any){
        this.router.navigate(['maestro/departamento',id]);  
      }
  


deletePais(pais:Pais){
  const dialogRef = this.dialog.open(DialogDeleteComponent,{
    width: this.width
  });
  dialogRef.afterClosed().subscribe(resul=>{
    if(resul){
      this.apiMaestroPais.Delete(pais.paiId).subscribe(response=>{
        if(response.exito ==1){
          this.snackBar.open('Cliente eliminado con exito','',{
            duration:2000
          });
                this.getMaestroPais();
        }
      });
    }
  });
}

 

  
}

