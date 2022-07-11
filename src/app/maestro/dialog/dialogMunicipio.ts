import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Municipio } from "src/app/Models/municipio";
import { ApiMaestroDepartamentoService } from "src/app/services/apimaestroDepartamento";
import { ApiMaestroMunicipioService } from "src/app/services/apimaestroMunicipio";




@Component({
    templateUrl: 'dialogMunicipio.html'
})
export class DialogMunicipioComponent{

    public munDepartamento:number =0;
    public munCodigoDane:string='';
    public munNombre:string='';
    public lst:any[]=[];
    
    constructor( 
        public dialogRef: MatDialogRef<DialogMunicipioComponent>,
        public apimunicipio : ApiMaestroMunicipioService,
        public apiDepartamento:ApiMaestroDepartamentoService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public municipio: Municipio
        ){
            if(this.municipio != null){
                
                this.munDepartamento=municipio.munDepartamento;
                this.munCodigoDane=municipio.munCodigoDane;
                this.munNombre=municipio.munNombre;
                
            }
        }
        ngOnInit(): void {
            this.getMaestroDepartamento();
          }
        getMaestroDepartamento(){
            this.apiDepartamento.getMaestroDepartamento().subscribe(response =>{
              this.lst = response.data;
            });
          }
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  municipio: Municipio  ={munId: 0,munDepartamento:this.munDepartamento ,munCodigoDane:this.munCodigoDane,munNombre:this.munNombre};
            this.apimunicipio.add(municipio).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const municipio: Municipio  ={munId: this.municipio.munId,munDepartamento:this.munDepartamento ,munCodigoDane:this.munCodigoDane,munNombre:this.munNombre};
            this.apimunicipio.Edit(municipio).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }