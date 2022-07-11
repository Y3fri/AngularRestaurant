import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PedidoTipo } from "src/app/Models/pedidoTipo";
import { ApiPedidoTipoService } from "src/app/services/apipedidoTipo";


@Component({
    templateUrl: 'dialogpedidoTipo.html'
})
export class DialogPedidoTipoComponent{

    
    public tipNombre: string='';   
    public tipDescripcion:string='';
    public tipEstado:boolean=true;
    
    constructor( 
        public dialogRef: MatDialogRef<DialogPedidoTipoComponent>,
        public apiPedidoTipo: ApiPedidoTipoService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: PedidoTipo
        ){
            if(this.menu != null){
                
                
                this.tipNombre=menu.tipNombre;
                this.tipDescripcion=menu.tipDescripcion;
                this.tipEstado=menu.tipEstado;

                
            }
        }

        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: PedidoTipo  ={tipId: 0, tipNombre:this.tipNombre,tipDescripcion:this.tipDescripcion,tipEstado:this.tipEstado};
            this.apiPedidoTipo.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: PedidoTipo ={tipId: this.menu.tipId,tipNombre:this.tipNombre,tipDescripcion:this.tipDescripcion,tipEstado:this.tipEstado};
            this.apiPedidoTipo.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }