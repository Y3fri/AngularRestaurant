import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuProducto } from "../Models/menuProducto";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiMenuProductoService {
  
    url : string ='http://localhost:5267/api/MenuProducto';
    constructor(
      private _http: HttpClient
    ) { }
  
    getMenuProducto(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(menuproducto : MenuProducto): Observable<Response>{
      return this._http.post<Response>(this.url, menuproducto, httpOption);
    }
  
    Edit(menuproducto : MenuProducto): Observable<Response>{
      return this._http.put<Response>(this.url, menuproducto, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }