import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from '../Models/response';
import { Modulo } from "../Models/ssomodulo";



const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiModuloService {
  
    url : string ='http://localhost:5267/api/SsoModelo';
    constructor(
      private _http: HttpClient
    ) { }
  
    getModelo(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(modulo : Modulo): Observable<Response>{
      return this._http.post<Response>(this.url, modulo, httpOption);
    }
  
    Edit(modulo : Modulo): Observable<Response>{
      return this._http.put<Response>(this.url, modulo, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }