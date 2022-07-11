import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PedidoTipoPago } from "../Models/pedidoTipoPago";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiPedidoTipoPagoService {
  
    url : string ='http://localhost:5267/api/PedidoTipoPagos';
    constructor(
      private _http: HttpClient
    ) { }
  
    getPedidoTipoPago(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(pedidoTipoPago : PedidoTipoPago): Observable<Response>{
      return this._http.post<Response>(this.url, pedidoTipoPago, httpOption);
    }
  
    Edit(pedidoTipoPago : PedidoTipoPago): Observable<Response>{
      return this._http.put<Response>(this.url, pedidoTipoPago, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }