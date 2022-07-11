import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from '../Models/response';
import { SsoUsuarios } from "../Models/usuarios";


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApissoUsuarioService {
  
    url : string ='http://localhost:5267/api/SsoUsuarioAgregar';
    constructor(
      private _http: HttpClient
    ) { }
  
    getUsuario(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(usuario: SsoUsuarios): Observable<Response>{
      return this._http.post<Response>(this.url, usuario, httpOption);
    }
  
    Edit(usuario: SsoUsuarios): Observable<Response>{
      return this._http.put<Response>(this.url, usuario, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }