import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiAuth } from "../services/apiAuth";

@Component({templateUrl: 'login.html'})
export class LoginComponent implements OnInit{
    
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
        private formBuilder:FormBuilder){
         if(this.apiauth.usuarioData){
             this.router.navigate(['/inf-restaurante']);
         }
    }

    ngOnInit() {
    
    }
    login(){
        this.apiauth.login(this.loginForm.value).subscribe(response =>{
            if(response.exito === 1){
                this.router.navigate(['/']);
            }
        });
    }
}