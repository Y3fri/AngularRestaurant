import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuModificacion } from "../Models/menuModificacion";

import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiMenuModificacionService {
  
    url : string ='http://localhost:5267/api/MenuModificacion';
    constructor(
      private _http: HttpClient
    ) { }
  
    getMenuModificacion(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(menuModificar : MenuModificacion): Observable<Response>{
      return this._http.post<Response>(this.url, menuModificar, httpOption);
    }
  
    Edit(menuModificar : MenuModificacion): Observable<Response>{
      return this._http.put<Response>(this.url, menuModificar, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }