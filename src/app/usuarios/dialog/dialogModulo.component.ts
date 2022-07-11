import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Modulo } from "src/app/Models/ssomodulo";
import { ApiModuloService } from "src/app/services/apiModulo";



@Component({
    templateUrl: 'dialogModulo.component.html'
})
export class DialogModuloComponent{

    
    public modNombre: string='';   
    public modDescripcion:string='';
   
    
    constructor( 
        public dialogRef: MatDialogRef<DialogModuloComponent>,
        public apiModulo: ApiModuloService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public mod: Modulo
        ){
            if(this.mod != null){
                
                
                this.modNombre=mod.modNombre;
                this.modDescripcion=mod.modDescripcion;
                

                
            }
        }

        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  modulo: Modulo ={modId: 0, modNombre:this.modNombre,modDescripcion:this.modDescripcion};
            this.apiModulo.add(modulo).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const modulo: Modulo ={modId: this.mod.modId,modNombre:this.modNombre,modDescripcion:this.modDescripcion};
            this.apiModulo.Edit(modulo).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }