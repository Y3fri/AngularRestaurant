import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuDescuento } from "../Models/menuDescuento";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiMenuDescuentoService {
  
    url : string ='http://localhost:5267/api/MenuDescuento';
    constructor(
      private _http: HttpClient
    ) { }
  
    getMenuDescuento(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(menuDescuento : MenuDescuento): Observable<Response>{
      return this._http.post<Response>(this.url, menuDescuento, httpOption);
    }
  
    Edit(menuDescuento : MenuDescuento): Observable<Response>{
      return this._http.put<Response>(this.url, menuDescuento, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }