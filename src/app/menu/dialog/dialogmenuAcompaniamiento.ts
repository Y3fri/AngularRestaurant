import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MenuAcompaniamiento } from "src/app/Models/menuAcompaniamiento";
import { ApiMenuAcompaniamientoService } from "src/app/services/apimenuAcompaniamiento";



@Component({
    templateUrl: 'dialogmenuAcompaniamiento.html'
})
export class DialogMenuAcompaniamientoComponent{

    public acoNombre: string='';   
    public acaPrecio:number=0;
    
    
    constructor( 
        public dialogRef: MatDialogRef<DialogMenuAcompaniamientoComponent>,
        public apiMenuAcompaniamiento: ApiMenuAcompaniamientoService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: MenuAcompaniamiento
        ){
            if(this.menu != null){ 
                this.acoNombre=menu.acoNombre;
                this.acaPrecio=menu.acaPrecio;  
            }
        }

        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: MenuAcompaniamiento  ={acoId: 0,acoNombre:this.acoNombre,acaPrecio:this.acaPrecio};
            this.apiMenuAcompaniamiento.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: MenuAcompaniamiento ={acoId: this.menu.acoId,acoNombre:this.acoNombre,acaPrecio:this.acaPrecio};
            this.apiMenuAcompaniamiento.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }