import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PedidoTipoPago } from "src/app/Models/pedidoTipoPago";
import { ApiPedidoTipoPagoService } from "src/app/services/apipedidoTipoPago";


@Component({
    templateUrl: 'dialogpedidoTipoPago.html'
})
export class DialogPedidoTipoPagoComponent{

    
    public tipaNombre: string='';   
    public tipaDescripcion:string='';
    public tipaEstado:boolean=true;
    
    constructor( 
        public dialogRef: MatDialogRef<DialogPedidoTipoPagoComponent>,
        public apiPedidoTipoPago: ApiPedidoTipoPagoService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: PedidoTipoPago
        ){
            if(this.menu != null){
                
                
                this.tipaNombre=menu.tipaNombre;
                this.tipaDescripcion=menu.tipaDescripcion;
                this.tipaEstado=menu.tipaEstado;

                
            }
        }

        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: PedidoTipoPago  ={tipaId: 0, tipaNombre:this.tipaNombre,tipaDescripcion:this.tipaDescripcion,tipaEstado:this.tipaEstado};
            this.apiPedidoTipoPago.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: PedidoTipoPago ={tipaId: this.menu.tipaId,tipaNombre:this.tipaNombre,tipaDescripcion:this.tipaDescripcion,tipaEstado:this.tipaEstado};
            this.apiPedidoTipoPago.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }