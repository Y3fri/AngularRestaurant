import { Injectable } from "@angular/core";
import { Router, CanActivate , ActivatedRouteSnapshot } from "@angular/router";
import { ApiAuth } from "../services/apiAuth";



@Injectable({ 
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    
    constructor(private router : Router,
        private apiauth : ApiAuth){
        
    }
    canActivate(route: ActivatedRouteSnapshot) {
        const usuario = this.apiauth.usuarioData;

        if(usuario){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}