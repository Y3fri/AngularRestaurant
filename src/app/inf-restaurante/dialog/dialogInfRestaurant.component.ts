import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DomSanitizer } from "@angular/platform-browser";
import { InfRestaurante } from "src/app/Models/infRestaurante";
import { ApiInfRestauranteService } from "src/app/services/apiInfRestaurante";
import { ApiMaestroMunicipioService } from "src/app/services/apimaestroMunicipio";


@Component({
    templateUrl: 'dialogInfRestaurant.component.html',
    styleUrls: ['dialogInfRestaurant.component.css']
})
export class DialogInfRestauranteComponent implements OnInit{
    public infMunicipio:number= 0;
    public intNit: string ='';
    public infRazonSocial: string='';
    public infEmailPrincipal:string='';
    public infDireccionPrincipal: string='';
    public infTelefonoPrincipal:string='';
    public infLogo:string='';
    public lst: any[]=[];
    public archivoss: any[]=[];

    constructor( 
        public dialogRef: MatDialogRef<DialogInfRestauranteComponent>,
        public apiInfRestaurante : ApiInfRestauranteService,
        public apiMunicipio:ApiMaestroMunicipioService,
        public snackBar:MatSnackBar,
        private sanitizer: DomSanitizer,
        @Inject(MAT_DIALOG_DATA) public infRes: InfRestaurante
        ){
            if(this.infRes != null){
                this.infMunicipio = infRes.infMunicipio;
                this.intNit=infRes.intNit;
                this.infRazonSocial=infRes.infRazonSocial;
                this.infEmailPrincipal=infRes.infEmailPrincipal;
                this.infDireccionPrincipal=infRes.infDireccionPrincipal;
                this.infTelefonoPrincipal=infRes.infTelefonoPrincipal;
                this.infLogo=infRes.infLogo;
            }
        }
        ngOnInit(): void {
            this.getMaestroMunicipio();
        
          }
         
        

        getMaestroMunicipio(){
            this.apiMunicipio.getMaestroMunicipio().subscribe(response =>{
              this.lst = response.data;
            });
          }
         
        cerrar(){
            this.dialogRef.close();
        }

        edit(){
            const InfResta: InfRestaurante ={infId: this.infRes.infId,infMunicipio: this.infMunicipio,intNit:this.intNit,infRazonSocial:this.infRazonSocial,infEmailPrincipal:this.infEmailPrincipal,infDireccionPrincipal:this.infDireccionPrincipal,infTelefonoPrincipal:this.infTelefonoPrincipal,infLogo:this.infLogo};
            this.apiInfRestaurante.Edit(InfResta).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
        capturarFile(event: any) {
          const archivoCapturados = event.target.files[0]
          this.extraerBase64(archivoCapturados).then((imagen: any) => {
              this.infLogo = imagen.base;
            console.log(imagen);
                    
          })
          this.archivoss.push(archivoCapturados)
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
        }