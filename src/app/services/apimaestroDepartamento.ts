import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Departamento } from "../Models/departamento";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiMaestroDepartamentoService {
  
    url : string ='http://localhost:5267/api/MaestroDepartamento';
    constructor(
      private _http: HttpClient
    ) { }
  
    getMaestroDepartamento(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(departamento : Departamento): Observable<Response>{
      return this._http.post<Response>(this.url, departamento, httpOption);
    }
  
    Edit(departamento : Departamento): Observable<Response>{
      return this._http.put<Response>(this.url, departamento, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }