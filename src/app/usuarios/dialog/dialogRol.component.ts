import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Rol } from "src/app/Models/ssoRol";
import { ApiRolService } from "src/app/services/apiRol";


@Component({
    templateUrl: 'dialogRol.component.html'
})
export class DialogRolComponent{

    
    public rolNombre: string='';   
    public rolDescripcion:string='';
   
    
    constructor( 
        public dialogRef: MatDialogRef<DialogRolComponent>,
        public apiRol: ApiRolService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public rol: Rol
        ){
            if(this.rol != null){            
                this.rolNombre=rol.rolNombre;
                this.rolDescripcion=rol.rolDescripcion;     
            }
        }

        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  rol: Rol ={rolId: 0, rolNombre:this.rolNombre,rolDescripcion:this.rolDescripcion};
            this.apiRol.add(rol).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const rol: Rol ={rolId: this.rol.rolId,rolNombre:this.rolNombre,rolDescripcion:this.rolDescripcion};
            this.apiRol.Edit(rol).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }