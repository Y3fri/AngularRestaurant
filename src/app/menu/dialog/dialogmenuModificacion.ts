import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MenuModificacion } from "src/app/Models/menuModificacion";
import { ApiMenuModificacionService } from "src/app/services/apimenuModificacion";




@Component({
    templateUrl: 'dialogmenuModificacion.html'
})
export class DialogMenuModificacionComponent{

    
    public modNombre: string='';   
    
    constructor( 
        public dialogRef: MatDialogRef<DialogMenuModificacionComponent>,
        public apiMenuModificacion : ApiMenuModificacionService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: MenuModificacion
        ){
            if(this.menu != null){
                
                this.modNombre=menu.modNombre;

            }
        }

        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: MenuModificacion ={modId: 0,modNombre:this.modNombre};
            this.apiMenuModificacion.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: MenuModificacion ={modId: this.menu.modId,modNombre:this.modNombre};
            this.apiMenuModificacion.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }