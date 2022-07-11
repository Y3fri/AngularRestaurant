import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PedidoProducto } from "src/app/Models/pedidoProducto";
import { ApiMenuProductoService } from "src/app/services/apiMenuProducto";
import { ApiPedidoEstadoService } from "src/app/services/apipedidoEstado";
import { ApiPedidoProductoService } from "src/app/services/apipedidoProducto";



@Component({
    templateUrl: 'dialogpedidoProducto.html'
})
export class DialogPedidoProductoComponent implements OnInit{

    
    public proProducto: number=0;   
    public proEstado:number=0;
    public proSolicitudAdicional:string='';
    public lst:any[]=[];
    public lst1:any[]=[];
    
    constructor( 
        public dialogRef: MatDialogRef<DialogPedidoProductoComponent>,
        public apiPedidoProducto: ApiPedidoProductoService,
        private apiPedidoEstado: ApiPedidoEstadoService,
        private apiMenuProducto: ApiMenuProductoService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: PedidoProducto
        ){
            if(this.menu != null){
                
                
                this.proProducto=menu.proProducto;
                this.proEstado=menu.proEstado;
                this.proSolicitudAdicional=menu.proSolicitudAdicional;

                
            }
        }
        ngOnInit(): void {
            this.getPedidoEstado();
            this.getMenuProducto();
          }

        
        getMenuProducto(){
            this.apiMenuProducto.getMenuProducto().subscribe(response =>{
              this.lst = response.data;
            });
          }
        getPedidoEstado(){
            this.apiPedidoEstado.getPedidoEstado().subscribe(response =>{
            this.lst1 = response.data;
            });
        }
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: PedidoProducto ={proId: 0, proProducto:this.proProducto,proEstado:this.proEstado,proSolicitudAdicional:this.proSolicitudAdicional};
            this.apiPedidoProducto.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: PedidoProducto ={proId: this.menu.proId,proProducto:this.proProducto,proEstado:this.proEstado,proSolicitudAdicional:this.proSolicitudAdicional};
            this.apiPedidoProducto.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }