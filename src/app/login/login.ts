import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiAuth } from "../services/apiAuth";
import { ApiInfRestauranteService } from "../services/apiInfRestaurante";

@Component({templateUrl: 'login.html',
styleUrls: ['login.css']})
export class LoginComponent implements OnInit{
    public lst:any[]=[];
    public loginForm = this.formBuilder.group({
        UsuNickname :['',Validators.required],
        UsuContrasenia :['',Validators.required]
    })
/*
    public loginForm = new  FormControl({
        email:new FormControl(''),
        password:new FormControl('')
    });*/

    constructor(public apiauth : ApiAuth, 
        private router:Router, 
        private apiInfRestaurante : ApiInfRestauranteService,
        private formBuilder:FormBuilder){
         if(this.apiauth.usuarioData){
             this.router.navigate(['/inf-restaurante']);
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
    login(){
        this.apiauth.login(this.loginForm.value).subscribe(response =>{
            if(response.exito === 1){
                this.router.navigate(['/inf-restaurante']);
            }
        });
    }
}