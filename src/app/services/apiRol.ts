import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from '../Models/response';
import { Rol } from "../Models/ssoRol";


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiRolService {
  
    url : string ='http://localhost:5267/api/SsoRol';
    constructor(
      private _http: HttpClient
    ) { }
  
    getRol(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(rol : Rol): Observable<Response>{
      return this._http.post<Response>(this.url, rol, httpOption);
    }
  
    Edit(rol : Rol): Observable<Response>{
      return this._http.put<Response>(this.url, rol, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }