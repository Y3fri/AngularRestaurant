import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { InfRestaurante } from "src/app/Models/infRestaurante";
import { ApiInfRestauranteService } from "src/app/services/apiInfRestaurante";
import { ApiMaestroMunicipioService } from "src/app/services/apimaestroMunicipio";


@Component({
    templateUrl: 'dialogInfRestaurant.component.html'
})
export class DialogInfRestauranteComponent implements OnInit{
    public InfMunicipio:number= 0;
    public IntNit: string ='';
    public InfRazonSocial: string='';
    public InfEmailPrincipal:string='';
    public InfDireccionPrincipal: string='';
    public InfTelefonoPrincipal:string='';
    public InfLogo:string='';
    public lst: any[]=[];

    constructor( 
        public dialogRef: MatDialogRef<DialogInfRestauranteComponent>,
        public apiInfRestaurante : ApiInfRestauranteService,
        public apiMunicipio:ApiMaestroMunicipioService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public infRes: InfRestaurante
        ){
            if(this.infRes != null){
                this.InfMunicipio = infRes.infMunicipio;
                this.IntNit=infRes.intNit;
                this.InfRazonSocial=infRes.infRazonSocial;
                this.InfEmailPrincipal=infRes.infEmailPrincipal;
                this.InfDireccionPrincipal=infRes.infDireccionPrincipal;
                this.InfTelefonoPrincipal=infRes.infTelefonoPrincipal;
                this.InfLogo=infRes.infLogo;
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

        add(){
            const  InfRess: InfRestaurante  ={infId: 0, infMunicipio: this.InfMunicipio,intNit:this.IntNit,infRazonSocial:this.InfRazonSocial,infEmailPrincipal:this.InfEmailPrincipal,infDireccionPrincipal:this.InfDireccionPrincipal,infTelefonoPrincipal:this.InfTelefonoPrincipal,infLogo:this.InfLogo};
            this.apiInfRestaurante.add(InfRess).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const InfResta: InfRestaurante ={infId: this.infRes.infId,infMunicipio: this.InfMunicipio,intNit:this.IntNit,infRazonSocial:this.InfRazonSocial,infEmailPrincipal:this.InfEmailPrincipal,infDireccionPrincipal:this.InfDireccionPrincipal,infTelefonoPrincipal:this.InfTelefonoPrincipal,infLogo:this.InfLogo};
            this.apiInfRestaurante.Edit(InfResta).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
        }