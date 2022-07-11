import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PedidoInformacion } from "../Models/pedidoInformacion";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiPedidoInformacionService {
  
    url : string ='http://localhost:5267/api/PedidoInformacion';
    constructor(
      private _http: HttpClient
    ) { }
  
    getPedidoInformacion(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(pedidoInfomacion : PedidoInformacion): Observable<Response>{
      return this._http.post<Response>(this.url, pedidoInfomacion, httpOption);
    }
  
    Edit(pedidoInfomacion : PedidoInformacion): Observable<Response>{
      return this._http.put<Response>(this.url, pedidoInfomacion, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }