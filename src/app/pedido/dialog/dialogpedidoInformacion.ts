import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PedidoInformacion } from "src/app/Models/pedidoInformacion";
import { ApiMaestroMunicipioService } from "src/app/services/apimaestroMunicipio";
import { ApiPedidoEstadoService } from "src/app/services/apipedidoEstado";
import { ApiPedidoInformacionService } from "src/app/services/apipedidoInfomacion";
import { ApiPedidoTipoService } from "src/app/services/apipedidoTipo";
import { ApiPedidoTipoPagoService } from "src/app/services/apipedidoTipoPago";




@Component({
    templateUrl: 'dialogpedidoInformacion.html',
    styleUrls: ['dialogpedidoInformacion.css']
})
export class DialogPedidoInformacionComponent{

    
    public infTipo: number=0;
    public infMunicipio: number=0;
    public infTipoPago: number=0;   
    public infEstado:number=0;
    public infNombreCliente: string='';
    public infDireccion:string='';
    public infTelefono:string='';
    public infNumeroPiso:string='';
    public infNumeroMesa:string='';
    public lst:any[]=[];
    public lst1:any[]=[];
    public lst2:any[]=[];
    public lst3:any[]=[];
    
    constructor( 
        public dialogRef: MatDialogRef<DialogPedidoInformacionComponent>,
        public apiPedidoInformacion: ApiPedidoInformacionService,
        private apiPedidoTipo: ApiPedidoTipoService,
        private apiPedidoTipoPago: ApiPedidoTipoPagoService,
        private apiPedidoEstado: ApiPedidoEstadoService,
        private apiMaestroMunicipio: ApiMaestroMunicipioService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: PedidoInformacion
        ){
            if(this.menu != null){
                
                this.infTipo=menu.infTipo;
                this.infMunicipio=menu.infMunicipio;
                this.infTipoPago=menu.infTipoPago;
                this.infEstado=menu.infEstado;
                this.infNombreCliente=menu.infNombreCliente;
                this.infDireccion=menu.infDireccion;
                this.infTelefono=menu.infTelefono;
                this.infNumeroPiso=menu.infNumeroPiso;
                this.infNumeroMesa=menu.infNumeroMesa;

                
            }
        }
        ngOnInit(): void {
            this.getPedidoTipo();
            this.getPedidoTipoPago();
            this.getPedidoEstado();
            this.getMaestroMunicipio();
          }
            getPedidoTipo(){
            this.apiPedidoTipo.getPedidoTipo().subscribe(response =>{
              this.lst = response.data;
            });
          }
          getMaestroMunicipio(){
            this.apiMaestroMunicipio.getMaestroMunicipio().subscribe(response =>{
              this.lst1 = response.data;
            });
          }
        

          getPedidoTipoPago(){
            this.apiPedidoTipoPago.getPedidoTipoPago().subscribe(response =>{
              this.lst2 = response.data;
            });
          }

          getPedidoEstado(){
            this.apiPedidoEstado.getPedidoEstado().subscribe(response =>{
              this.lst3 = response.data;
            });
          }

          
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: PedidoInformacion={infId: 0, infTipo:this.infTipo,infMunicipio:this.infMunicipio,infTipoPago:this.infTipoPago,infEstado:this.infEstado,infNombreCliente:this.infNombreCliente,infDireccion:this.infDireccion,infTelefono:this.infTelefono,infNumeroPiso:this.infNumeroPiso,infNumeroMesa:this.infNumeroMesa};
            this.apiPedidoInformacion.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: PedidoInformacion ={infId: this.menu.infId,infTipo:this.infTipo,infMunicipio:this.infMunicipio,infTipoPago:this.infTipoPago,infEstado:this.infEstado,infNombreCliente:this.infNombreCliente,infDireccion:this.infDireccion,infTelefono:this.infTelefono,infNumeroPiso:this.infNumeroPiso,infNumeroMesa:this.infNumeroMesa};
            this.apiPedidoInformacion.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }