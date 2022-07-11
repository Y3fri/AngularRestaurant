import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MenuCategoria } from "src/app/Models/menuCategoria";
import { ApiMenuCategoriaService } from "src/app/services/apiMenuCategoria";
import { ApiSedeService } from "src/app/services/apiSede";


@Component({
    templateUrl: 'dialogmenuCategoria.html'
})
export class DialogMenuCategoriaComponent implements OnInit{

    public catSede:number=0;
    public catNombre: string='';   
    public catDescripcion:string='';
    public catEstado:boolean=true;
    public lst:any[]=[];
   
    
    constructor( 
        public dialogRef: MatDialogRef<DialogMenuCategoriaComponent>,
        public apiMenuCategoria : ApiMenuCategoriaService,
        private apiSede: ApiSedeService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menu: MenuCategoria
        ){
            if(this.menu != null){
                
                this.catSede=menu.carSede;
                this.catNombre=menu.catNombre;
                this.catDescripcion=menu.catDescripcion;
                this.catEstado=menu.catEstado;

                
            }
        }
        ngOnInit(): void {
            this.getSede();
          }
        getSede(){
            this.apiSede.getSede().subscribe(response =>{
              this.lst = response.data;
            });
          }
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: MenuCategoria  ={catId: 0, carSede:this.catSede,catNombre:this.catNombre,catDescripcion:this.catDescripcion,catEstado:this.catEstado};
            this.apiMenuCategoria.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: MenuCategoria ={catId: this.menu.catId,carSede:this.catSede,catNombre:this.catNombre,catDescripcion:this.catDescripcion,catEstado:this.catEstado};
            this.apiMenuCategoria.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }