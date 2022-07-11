import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../Common/delete/dialogdelete.component';
import { MenuAcompaniamiento } from '../Models/menuAcompaniamiento';
import { MenuCategoria } from '../Models/menuCategoria';
import { MenuDescuento } from '../Models/menuDescuento';
import { MenuModificacion } from '../Models/menuModificacion';
import { MenuProducto } from '../Models/menuProducto';
import { ApiMenuAcompaniamientoService } from '../services/apimenuAcompaniamiento';
import { ApiMenuCategoriaService } from '../services/apiMenuCategoria';
import { ApiMenuDescuentoService } from '../services/apiMenuDescuento';
import { ApiMenuModificacionService } from '../services/apimenuModificacion';
import { ApiMenuProductoService } from '../services/apiMenuProducto';
import { DialogMenuAcompaniamientoComponent } from './dialog/dialogmenuAcompaniamiento';
import { DialogMenuCategoriaComponent } from './dialog/dialogmenuCategoria';
import { DialogMenuDescuentoComponent } from './dialog/dialogmenuDescuento';
import { DialogMenuModificacionComponent } from './dialog/dialogmenuModificacion';
import { DialogMenuProductoComponent } from './dialog/dialogmenuProducto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public lst: any[] =[];
  public columnas : string[] = ['id','sede','nombre','descripcion','estado','actions'];
  public lst1: any[] =[];
  public columnas1 : string[] = ['id','categoria','sede','nombre','descripcion','precio','foto','video','preparacion','estado','actions'];
  public lst2: any[] =[];
  public columnas2 : string[] = ['id','nombre','precio','actions'];
  public lst3: any[] =[];
  public columnas3 : string[] = ['id','nombre','actions'];
  public lst4: any[] =[];
  public columnas4 : string[] = ['id','producto','porcentaje','fechaI','fechaF','estado','actions'];
 readonly width: string = '300'
  constructor(
    private apiMenuCategoria: ApiMenuCategoriaService,
    private apiMenuProducto: ApiMenuProductoService,
    private apiMenuAcompaniamiento: ApiMenuAcompaniamientoService,
    private apiMenuModificacion:ApiMenuModificacionService,
    private apiMenuDescuento:ApiMenuDescuentoService,
    public  dialog: MatDialog,
    public snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getMenuCategoria();
    this.getMenuProducto();
    this.getMenuAcompaniamiento();
    this.getMenuModificacion();
    this.getMenuDescuento();
  }
//Menu Categoria
getMenuCategoria(){
  this.apiMenuCategoria.getMenuCategoria().subscribe(response =>{
    this.lst = response.data;
  });
}


openAddMenuCategoria(){
  const dialogRef = this.dialog.open(DialogMenuCategoriaComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuCategoria();
});
}

openEditMenuCategoria(menucategoria : MenuCategoria){
const dialogRef = this.dialog.open(DialogMenuCategoriaComponent,{
  width: this.width,
  data:menucategoria
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuCategoria();
})
}

deleteMenuCategoria(menucategoria : MenuCategoria){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiMenuCategoria.Delete(menucategoria.catId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getMenuCategoria();
      }
    });
  }
});
}

//Menu Producto

getMenuProducto(){
  this.apiMenuProducto.getMenuProducto().subscribe(response =>{
    this.lst1 = response.data;
  });
}


openAddMenuProducto(){
  const dialogRef = this.dialog.open(DialogMenuProductoComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuProducto();
});
}

openEditMenuProducto(menuproducto : MenuProducto){
const dialogRef = this.dialog.open(DialogMenuProductoComponent,{
  width: this.width,
  data:menuproducto
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuProducto();
})
}

deleteMenuProducto(menuproducto : MenuProducto){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiMenuProducto.Delete(menuproducto.proId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getMenuProducto();
      }
    });
  }
});
}
//Menu Acompaniamiento

getMenuAcompaniamiento(){
  this.apiMenuAcompaniamiento.getMenuAcompaniamiento().subscribe(response =>{
    this.lst2 = response.data;
  });
}


openAddMenuAcompaniamiento(){
  const dialogRef = this.dialog.open(DialogMenuAcompaniamientoComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuAcompaniamiento();
});
}

openEditMenuAcompaniamiento(menuAcompaniamiento : MenuAcompaniamiento){
const dialogRef = this.dialog.open(DialogMenuAcompaniamientoComponent,{
  width: this.width,
  data:menuAcompaniamiento
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuAcompaniamiento();
})
}

deleteMenuAcompaniamiento(menuAcompaniamiento : MenuAcompaniamiento){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiMenuAcompaniamiento.Delete(menuAcompaniamiento.acoId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getMenuAcompaniamiento();
      }
    });
  }
});
}

//Menu Modificacion

getMenuModificacion(){
  this.apiMenuModificacion.getMenuModificacion().subscribe(response =>{
    this.lst3 = response.data;
  });
}


openAddMenuModificacion(){
  const dialogRef = this.dialog.open(DialogMenuModificacionComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuModificacion();
});
}

openEditMenuModificacion(menuModificacion : MenuModificacion){
const dialogRef = this.dialog.open(DialogMenuModificacionComponent,{
  width: this.width,
  data:menuModificacion
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuModificacion();
})
}

deleteMenuModificacion(menuModificacion: MenuModificacion){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiMenuModificacion.Delete(menuModificacion.modId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getMenuModificacion();
      }
    });
  }
});
}


//Menu Descuento

getMenuDescuento(){
  this.apiMenuDescuento.getMenuDescuento().subscribe(response =>{
    this.lst4 = response.data;
  });
}


openAddMenuDescuento(){
  const dialogRef = this.dialog.open(DialogMenuDescuentoComponent,{

  });

dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuDescuento();
});
}

openEditMenuDescuento(menuDescuento : MenuDescuento){
const dialogRef = this.dialog.open(DialogMenuDescuentoComponent,{
  width: this.width,
  data:menuDescuento
});
dialogRef.afterClosed().subscribe(resul=>{
  this.getMenuDescuento();
})
}

deleteMenuDescuento(menuDescuento: MenuDescuento){
const dialogRef = this.dialog.open(DialogDeleteComponent,{
  width: this.width
});
dialogRef.afterClosed().subscribe(resul=>{
  if(resul){
    this.apiMenuDescuento.Delete(menuDescuento.desId).subscribe(response=>{
      if(response.exito ==1){
        this.snackBar.open('Cliente eliminado con exito','',{
          duration:2000
        });
              this.getMenuModificacion();
      }
    });
  }
});
}
}

