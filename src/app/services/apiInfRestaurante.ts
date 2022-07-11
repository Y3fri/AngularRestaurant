import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from '../Models/response';
import { InfRestaurante } from "../Models/infRestaurante";

const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiInfRestauranteService {
  
    url : string ='http://localhost:5267/api/RestauranteInformacion';
    constructor(
      private _http: HttpClient
    ) { }
  
    getInfRestaurante(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(infRestaurante : InfRestaurante): Observable<Response>{
      return this._http.post<Response>(this.url, infRestaurante, httpOption);
    }
  
    Edit(infRestaurante : InfRestaurante): Observable<Response>{
      return this._http.put<Response>(this.url, infRestaurante, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }