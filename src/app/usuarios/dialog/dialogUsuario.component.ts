import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SsoUsuarios } from "src/app/Models/usuarios";
import { ApiInfRestauranteService } from "src/app/services/apiInfRestaurante";
import { ApiRolService } from "src/app/services/apiRol";

import { ApissoUsuarioService } from "src/app/services/apissoUsuarios";


@Component({
    templateUrl: 'dialogUsuario.component.html'
})
export class DialogUsuarioComponent implements OnInit{

    public usuId:number= 0;
    public usuRestaurante:number=0;
    public usuRol:number=0;
    public usuDocumento:string='';
    public usuNombre: string='';   
    public usuApellido:string='';
    public usuNickname:string='';
    public usuContrasenia:string='';
    public lst:any[]=[];
    public lst2:any[]=[];
    
    constructor( 
        public dialogRef: MatDialogRef<DialogUsuarioComponent>,
        public apiUsu: ApissoUsuarioService,
        public apiInfRestaurante: ApiInfRestauranteService,
        public apiRol : ApiRolService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public usu: SsoUsuarios
        ){
            if(this.usu != null){
         
                this.usuRestaurante=usu.usuRestaurante;
                this.usuRol=usu.usuRol;
                this.usuDocumento=usu.usuDocumento;
                this.usuNombre=usu.usuNombre;
                this.usuApellido=usu.usuApellido;
                this.usuNickname=usu.usuNickname;
                this.usuContrasenia=usu.usuContrasenia;     
            }
        }
    ngOnInit(): void {
        this.getInfRestaurante();
        this.getRol();
    }

        getInfRestaurante(){
            this.apiInfRestaurante.getInfRestaurante().subscribe(response =>{
              this.lst = response.data;
            });
          }
          getRol(){
            this.apiRol.getRol().subscribe(response =>{
              this.lst2 = response.data;
            });
          }
        cerrar(){
            this.dialogRef.close();
        }

        add(){
            const  usu : SsoUsuarios ={usuId: 0,usuRestaurante:this.usuRestaurante,usuRol:this.usuRol,usuDocumento:this.usuDocumento,usuNombre:this.usuNombre,usuApellido:this.usuApellido,usuNickname:this.usuNickname,usuContrasenia:this.usuContrasenia};
            this.apiUsu.add(usu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente insertado con éxito','',{
                        duration:2000
                });
            }
        });
    }
        edit(){
            const usu: SsoUsuarios ={usuId: this.usu.usuId,usuRestaurante:this.usuRestaurante,usuRol:this.usuRol,usuDocumento:this.usuDocumento,usuNombre:this.usuNombre,usuApellido:this.usuApellido,usuNickname:this.usuNickname,usuContrasenia:this.usuContrasenia};
            this.apiUsu.Edit(usu).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snackBar.open('Cliente editado con éxito','',{
                        duration:2000
                });
            }
        });
        }
 
    }      