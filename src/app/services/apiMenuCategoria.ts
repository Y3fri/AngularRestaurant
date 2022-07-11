import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuCategoria } from "../Models/menuCategoria";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiMenuCategoriaService {
  
    url : string ='http://localhost:5267/api/MenuCategoria';
    constructor(
      private _http: HttpClient
    ) { }
  
    getMenuCategoria(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(menucategoria : MenuCategoria): Observable<Response>{
      return this._http.post<Response>(this.url, menucategoria, httpOption);
    }
  
    Edit(menucategoria : MenuCategoria): Observable<Response>{
      return this._http.put<Response>(this.url, menucategoria, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }