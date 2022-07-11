import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiAuth } from "../services/apiAuth";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private apiauth: ApiAuth){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const usuario = this.apiauth.usuarioData;
        if(usuario){
            request=request.clone({
                setHeaders: {
                    Authorization: `Bearer ${usuario.token}`
                }
            });
        }
        return next.handle(request);
    }
}