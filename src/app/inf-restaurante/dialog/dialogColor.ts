import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Color } from "src/app/Models/color";
import { ApiColorService } from "src/app/services/apiColor";
import { ApiInfRestauranteService } from "src/app/services/apiInfRestaurante";


@Component({
    templateUrl: 'dialogColor.html',
})
export class DialogColorComponent implements OnInit{
    public colRestarurante:number= 0;
    public colFondo: string ='';
    public colEncabezado: string='';
    public colFuente:string='';
    public colTitulos: string='';
    public colTitEncabezado:string='';
    public colTituMenu:string='';
    public colConteMenu:string='';
    public lst: any[]=[];

    constructor( 
        public dialogRef: MatDialogRef<DialogColorComponent>,
        public apiColor:ApiColorService, 
        public apiInfRestaurante : ApiInfRestauranteService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public color: Color
        ){
            if(this.color != null){
                this.colRestarurante = color.colRestarurante;
                this.colFondo=color.colFondo;
                this.colEncabezado=color.colEncabezado;
                this.colFuente=color.colFuente;
                this.colTitulos=color.colTitulos;
                this.colTitEncabezado=color.colTitEncabezado;
                this.colTituMenu=color.colTituMenu;
                this.colConteMenu=color.colConteMenu;
             
            }
        }
        ngOnInit(): void {
            this.getInfRestaurante();
          }
          getInfRestaurante(){
            this.apiInfRestaurante.getInfRestaurante().subscribe(response =>{
              this.lst = response.data;
            });
          }
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const color:Color  ={colId: 0,colRestarurante:this.colRestarurante,colFondo:this.colFondo,colEncabezado:this.colEncabezado,colFuente:this.colFuente,colTitulos:this.colTitulos,colTitEncabezado:this.colTitEncabezado,colTituMenu:this.colTituMenu,colConteMenu:this.colConteMenu};
            this.apiColor.add(color).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const color:Color  ={colId: this.color.colId,colRestarurante:this.colRestarurante,colFondo:this.colFondo,colEncabezado:this.colEncabezado,colFuente:this.colFuente,colTitulos:this.colTitulos,colTitEncabezado:this.colTitEncabezado,colTituMenu:this.colTituMenu,colConteMenu:this.colConteMenu};
            this.apiColor.Edit(color).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }

        }