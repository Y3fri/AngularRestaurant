import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Pais } from "src/app/Models/pais";
import { ApiMaestroPaisService } from "src/app/services/apimaestroPais";


@Component({
    templateUrl: 'dialogPais.html'
})
export class DialogPaisComponent{

    public paiNombre: string ='';
    
    constructor( 
        public dialogRef: MatDialogRef<DialogPaisComponent>,
        public apipais : ApiMaestroPaisService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public pais: Pais
        ){
            if(this.pais != null){
                
                this.paiNombre=pais.paiNombre;
                
            }
        }

        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  pais: Pais  ={paiId: 0, paiNombre:this.paiNombre};
            this.apipais.add(pais).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
                        }
    });
    
}
        edit(){
            const pais: Pais ={paiId: this.pais.paiId,paiNombre:this.paiNombre};
            this.apipais.Edit(pais).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
    }

