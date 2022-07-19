import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DomSanitizer } from "@angular/platform-browser";
import { MenuProducto } from "src/app/Models/menuProducto";
import { ApiMenuCategoriaService } from "src/app/services/apiMenuCategoria";
import { ApiMenuProductoService } from "src/app/services/apiMenuProducto";
import { ApiSedeService } from "src/app/services/apiSede";


@Component({
    templateUrl: 'dialogmenuProducto.html',
    styleUrls: ['dialogmenuProducto.css']
})
export class DialogMenuProductoComponent implements OnInit{

    public proCategoria:number=0;
    public proSede:number=0;
    public proNombre: string='';   
    public proDescripcion:string='';
    public proPrecio:number=0;
    public proFoto:string='';
    public proVideo: string ='';
    public proTiempoPreparacion:number=0;
    public proEstado:boolean=true;
    public lst:any[]=[];
    public lst1:any[]=[];
    public archivos: any[]=[];
  
    
    constructor( 
        public dialogRef: MatDialogRef<DialogMenuProductoComponent>,
        public apiMenuProducto : ApiMenuProductoService,
        private apiMenuCategoria: ApiMenuCategoriaService,
        private sanitizer: DomSanitizer,
        private apiSede: ApiSedeService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public menuu: MenuProducto
        ){
            if(this.menuu != null){
                
                this.proCategoria=menuu.proCategoria;
                this.proSede=menuu.proSede;
                this.proNombre=menuu.proNombre;
                this.proDescripcion=menuu.proDescripcion;
                this.proPrecio=menuu.proPrecio;
                this.proFoto=menuu.proFoto;
                this.proVideo=menuu.proVideo;
                this.proTiempoPreparacion=menuu.proTiempoPreparacion;
                this.proEstado=menuu.proEstado;

                
            }
        }
        ngOnInit(): void {
            this.getMenuCategoria();
            this.getSede();
          }

          capturarFile(event: any) {
            const archivoCapturado = event.target.files[0]
            this.extraerBase64(archivoCapturado).then((imagen: any) => {
                this.proFoto = imagen.base;
              console.log(imagen);
                      
            })
            this.archivos.push(archivoCapturado)
            // 
            // console.log(event.target.files);
        
          }
        
        
          extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
            try {
              const unsafeImg = window.URL.createObjectURL($event);
              const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
              const reader = new FileReader();
              reader.readAsDataURL($event);
              reader.onload = () => {
                resolve({
                  base: reader.result
                });
              };
              reader.onerror = error => {
                resolve({
                  base: null
                });
              };
        
            } catch (e) {
              return null;
            }
            return $event;
          })
        
 

        getMenuCategoria(){
            this.apiMenuCategoria.getMenuCategoria().subscribe(response =>{
              this.lst = response.data;
            });
          }
          getSede(){
            this.apiSede.getSede().subscribe(response =>{
              this.lst1 = response.data;
            });
          }
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  menu: MenuProducto ={proId: 0,proCategoria:this.proCategoria,proSede:this.proSede,proNombre:this.proNombre,proDescripcion:this.proDescripcion,proPrecio:this.proPrecio,proFoto:this.proFoto,proVideo:this.proVideo,proTiempoPreparacion:this.proTiempoPreparacion,proEstado:this.proEstado};
            this.apiMenuProducto.add(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const menu: MenuProducto ={proId: this.menuu.proId,proCategoria:this.proCategoria,proSede:this.proSede,proNombre:this.proNombre,proDescripcion:this.proDescripcion,proPrecio:this.proPrecio,proFoto:this.proFoto,proVideo:this.proVideo,proTiempoPreparacion:this.proTiempoPreparacion,proEstado:this.proEstado};
            this.apiMenuProducto.Edit(menu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }