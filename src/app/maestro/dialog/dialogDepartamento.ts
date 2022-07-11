import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Departamento } from "src/app/Models/departamento";
import { ApiMaestroDepartamentoService } from "src/app/services/apimaestroDepartamento";
import { ApiMaestroPaisService } from "src/app/services/apimaestroPais";



@Component({
    templateUrl: 'dialogDepartamento.html'
})
export class DialogDepartamentoComponent implements OnInit{

    public depPais:number =0;
    public depCodigoDane:string='';
    public depNombre:string='';
    public lst:any[]=[];
    
    constructor( 
        public dialogRef: MatDialogRef<DialogDepartamentoComponent>,
        public apidepartamento : ApiMaestroDepartamentoService,
        public apiPais:ApiMaestroPaisService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public departamento: Departamento
        ){
            if(this.departamento != null){
                
                this.depPais=departamento.depPais;
                this.depCodigoDane=departamento.depCodigoDane;
                this.depNombre=departamento.depNombre;
                
            }
        }
        ngOnInit(): void {
            this.getMaestroPais();
          }
        getMaestroPais(){
            this.apiPais.getMaestroPais().subscribe(response =>{
              this.lst = response.data;
            });
          }
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  departamento: Departamento  ={depId: 0,depPais:this.depPais ,depCodigoDane:this.depCodigoDane,depNombre:this.depNombre};
            this.apidepartamento.add(departamento).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const departamento: Departamento  ={depId: this.departamento.depId,depPais:this.depPais ,depCodigoDane:this.depCodigoDane,depNombre:this.depNombre};
            this.apidepartamento.Edit(departamento).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }