import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PedidoEstado } from "src/app/Models/pedidoEstado";
import { PedidoTipo } from "src/app/Models/pedidoTipo";
import { ApiPedidoEstadoService } from "src/app/services/apipedidoEstado";
import { ApiPedidoTipoService } from "src/app/services/apipedidoTipo";


@Component({
    templateUrl: 'dialogpedidoEstado.html'
})
export class DialogPedidoEstadoComponent{

    
    public estNombre: string='';   
    public estDescripcion:string='';
    public estEstado:boolean=true;
    
    constructor( 
        public dialogRef: MatDialogRef<DialogPedidoEstadoComponent>,
        public apiPedidoEstado: ApiPedidoEstadoService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: PedidoEstado
        ){
            if(this.menu != null){
                
                
                this.estNombre=menu.estNombre;
                this.estDescripcion=menu.estDescripcion;
                this.estEstado=menu.estEstado;

                
            }
        }

        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: PedidoEstado ={estId: 0, estNombre:this.estNombre,estDescripcion:this.estDescripcion,estEstado:this.estEstado};
            this.apiPedidoEstado.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: PedidoEstado ={estId: this.menu.estId,estNombre:this.estNombre,estDescripcion:this.estDescripcion,estEstado:this.estEstado};
            this.apiPedidoEstado.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }