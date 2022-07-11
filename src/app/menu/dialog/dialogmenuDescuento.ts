import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MenuDescuento } from "src/app/Models/menuDescuento";
import { ApiMenuDescuentoService } from "src/app/services/apiMenuDescuento";
import { ApiMenuProductoService } from "src/app/services/apiMenuProducto";


@Component({
    templateUrl: 'dialogmenuDescuento.html'
})
export class DialogMenuDescuentoComponent implements OnInit{

    public desProducto:number=0;
    public desPorcentaje: number=0; 
    public desFechaFinal:Date = new Date();  
    public desFechaInicio:Date = new Date();
    public desEstado:boolean=true;
    public lst:any[]=[];
    constructor( 
        public dialogRef: MatDialogRef<DialogMenuDescuentoComponent>,
        public apiMenuDescuento : ApiMenuDescuentoService,
        private apiMenuProducto: ApiMenuProductoService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: MenuDescuento
        ){
            if(this.menu != null){
                
                this.desProducto=menu.desProducto;
                this.desPorcentaje=menu.desPorcentaje;
                this.desFechaInicio=menu.desFechaInicio;
                this.desFechaFinal=menu.desFechaFinal;
                this.desEstado=menu.desEstado;
                
            }
        }
        ngOnInit(): void {
            this.getMenuProducto();
          }
        getMenuProducto(){
            this.apiMenuProducto.getMenuProducto().subscribe(response =>{
              this.lst = response.data;
            });
          }
          
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: MenuDescuento  ={desId: 0, desProducto:this.desProducto,desPorcentaje:this.desPorcentaje,desFechaInicio:this.desFechaInicio,desFechaFinal:this.desFechaFinal,desEstado:this.desEstado};
            this.apiMenuDescuento.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: MenuDescuento ={desId: this.menu.desId,desProducto:this.desProducto,desPorcentaje:this.desPorcentaje,desFechaInicio:this.desFechaInicio,desFechaFinal:this.desFechaFinal,desEstado:this.desEstado};
            this.apiMenuDescuento.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }