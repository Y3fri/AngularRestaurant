import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../Common/delete/dialogdelete.component';
import { Modulo } from '../Models/ssomodulo';
import { Rol } from '../Models/ssoRol';
import { SsoUsuarios } from '../Models/usuarios';
import { ApiModuloService } from '../services/apiModulo';
import { ApiRolService } from '../services/apiRol';
import { ApissoUsuarioService } from '../services/apissoUsuarios';
import { DialogModuloComponent } from './dialog/dialogModulo.component';
import { DialogRolComponent } from './dialog/dialogRol.component';
import { DialogUsuarioComponent } from './dialog/dialogUsuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public lst: any[] =[];
  public columnas : string[] = ['id','nombre','descripcion','actions'];
  public lst2: any[] =[];
  public columnas2 : string[] = ['id','nombre','descripcion','actions'];
  public lst3: any[] =[];
  public columnas3 : string[] = ['id','restaurante','rol','documento','nombre','apellido','nickname','contraseña','actions'];
  readonly width: string = '300'
  constructor(private apiRol:ApiRolService,
    private apiModulo: ApiModuloService,
    private apiUsu: ApissoUsuarioService,
    public  dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getRol();
    this.getMod();
    this.getUsu();
    }
  getRol(){
    this.apiRol.getRol().subscribe(response =>{
      this.lst = response.data;
    });
  }
  
  
  openAddRol(){
    const dialogRef = this.dialog.open(DialogRolComponent,{
  
    });
  
  dialogRef.afterClosed().subscribe(resul=>{
    this.getRol();
  });
  }
  
  openEditRol(rol:Rol){
  const dialogRef = this.dialog.open(DialogRolComponent,{
    width: this.width,
    data:rol
  });
  dialogRef.afterClosed().subscribe(resul=>{
    this.getRol();
  })
  }
  
  deleteRol(rol:Rol){
  const dialogRef = this.dialog.open(DialogDeleteComponent,{
    width: this.width
  });
  dialogRef.afterClosed().subscribe(resul=>{
    if(resul){
      this.apiRol.Delete(rol.rolId).subscribe(response=>{
        if(response.exito ==1){
          this.snackBar.open('Cliente eliminado con exito','',{
            duration:2000
          });
                this.getRol();
        }
      });
    }
  });
  }

  getMod(){
    this.apiModulo.getModelo().subscribe(response =>{
      this.lst2 = response.data;
    });
  }
  
  
  openAddMod(){
    const dialogRef = this.dialog.open(DialogModuloComponent,{
  
    });
  
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMod();
  });
  }
  
  openEditMod(modulo:Modulo){
  const dialogRef = this.dialog.open(DialogModuloComponent,{
    width: this.width,
    data:modulo
  });
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMod();
  })
  }
  
  deleteMod(modulo:Modulo){
  const dialogRef = this.dialog.open(DialogDeleteComponent,{
    width: this.width
  });
  dialogRef.afterClosed().subscribe(resul=>{
    if(resul){
      this.apiModulo.Delete(modulo.modId).subscribe(response=>{
        if(response.exito ==1){
          this.snackBar.open('Cliente eliminado con exito','',{
            duration:2000
          });
                this.getMod();
        }
      });
    }
  });
  }
  
  getUsu(){
    this.apiUsu.getUsuario().subscribe(response =>{
      this.lst3 = response.data;
    });
  }
  
  
  openAddUsu(){
    const dialogRef = this.dialog.open(DialogUsuarioComponent,{
  
    });
  
  dialogRef.afterClosed().subscribe(resul=>{
    this.getUsu();
  });
  }
  
  openEditUsu( usu : SsoUsuarios){
  const dialogRef = this.dialog.open(DialogUsuarioComponent,{
    width: this.width,
    data:usu
  });
  dialogRef.afterClosed().subscribe(resul=>{
    this.getMod();
  })
  }
  
  deleteUsu( usu : SsoUsuarios){
  const dialogRef = this.dialog.open(DialogDeleteComponent,{
    width: this.width
  });
  dialogRef.afterClosed().subscribe(resul=>{
    if(resul){
      this.apiUsu.Delete(usu.usuId).subscribe(response=>{
        if(response.exito ==1){
          this.snackBar.open('Cliente eliminado con exito','',{
            duration:2000
          });
                this.getMod();
        }
      });
    }
  });
  }
}
