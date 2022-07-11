import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PedidoProducto } from "../Models/pedidoProducto";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiPedidoProductoService {
  
    url : string ='http://localhost:5267/api/PedidoProducto';
    constructor(
      private _http: HttpClient
    ) { }
  
    getPedidoProducto(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(pedidoProducto : PedidoProducto): Observable<Response>{
      return this._http.post<Response>(this.url, pedidoProducto, httpOption);
    }
  
    Edit(pedidoProducto : PedidoProducto): Observable<Response>{
      return this._http.put<Response>(this.url, pedidoProducto, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }