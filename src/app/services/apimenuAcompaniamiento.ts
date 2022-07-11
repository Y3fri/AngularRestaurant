import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuAcompaniamiento } from "../Models/menuAcompaniamiento";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiMenuAcompaniamientoService {
  
    url : string ='http://localhost:5267/api/MenuAcompaniamiento';
    constructor(
      private _http: HttpClient
    ) { }
  
    getMenuAcompaniamiento(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(menuacompaniamiento : MenuAcompaniamiento): Observable<Response>{
      return this._http.post<Response>(this.url, menuacompaniamiento, httpOption);
    }
  
    Edit(menuacompaniamiento : MenuAcompaniamiento): Observable<Response>{
      return this._http.put<Response>(this.url, menuacompaniamiento, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }