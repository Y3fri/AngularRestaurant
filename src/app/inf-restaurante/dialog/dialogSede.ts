import { Component, Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Sede } from "src/app/Models/sede";
import { ApiInfRestauranteService } from "src/app/services/apiInfRestaurante";
import { ApiSedeService } from "src/app/services/apiSede";


@Component({
    templateUrl: 'dialogSede.html'
})
export class DialogSedeComponent{

    public sedInfirmation:number= 0;
    public sedEmail: string ='';
    public sedInfDireccion: string='';
    public sedInfTelefono:string='';
    public sedUbicacionGoogle: string='';
    public lst:any[]=[];
   

    constructor( 
        public dialogRef: MatDialogRef<DialogSedeComponent>,
        public apiSede : ApiSedeService,
        private apiInfRestaurante: ApiInfRestauranteService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public sede: Sede
        ){
            if(this.sede != null){
                this.sedInfirmation = sede.sedInfirmation;
                this.sedEmail=sede.sedEmail;
                this.sedInfDireccion=sede.sedInfDireccion;
                this.sedInfTelefono=sede.sedInfTelefono;
                this.sedUbicacionGoogle=sede.sedUbicacionGoogle;
                
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
            const sede:Sede  ={sedId: 0, sedInfirmation: this.sedInfirmation,sedEmail:this.sedEmail,sedInfDireccion:this.sedInfDireccion,sedInfTelefono:this.sedInfTelefono,sedUbicacionGoogle:this.sedUbicacionGoogle};
            this.apiSede.add(sede).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const sede:Sede ={sedId: this.sede.sedId,sedInfirmation: this.sedInfirmation,sedEmail:this.sedEmail,sedInfDireccion:this.sedInfDireccion,sedInfTelefono:this.sedInfTelefono,sedUbicacionGoogle:this.sedUbicacionGoogle};
            this.apiSede.Edit(sede).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }