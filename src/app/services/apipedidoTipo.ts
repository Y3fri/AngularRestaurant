import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PedidoTipo } from "../Models/pedidoTipo";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiPedidoTipoService {
  
    url : string ='http://localhost:5267/api/PedidoTipo';
    constructor(
      private _http: HttpClient
    ) { }
  
    getPedidoTipo(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(pedidoTipo : PedidoTipo): Observable<Response>{
      return this._http.post<Response>(this.url, pedidoTipo, httpOption);
    }
  
    Edit(pedidoTipo : PedidoTipo): Observable<Response>{
      return this._http.put<Response>(this.url, pedidoTipo, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }