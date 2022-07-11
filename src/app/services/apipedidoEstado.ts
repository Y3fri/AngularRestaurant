import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PedidoEstado } from "../Models/pedidoEstado";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiPedidoEstadoService {
  
    url : string ='http://localhost:5267/api/PedidoEstado';
    constructor(
      private _http: HttpClient
    ) { }
  
    getPedidoEstado(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(pedidoEstado: PedidoEstado): Observable<Response>{
      return this._http.post<Response>(this.url, pedidoEstado, httpOption);
    }
  
    Edit(pedidoEstado : PedidoEstado): Observable<Response>{
      return this._http.put<Response>(this.url, pedidoEstado, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }