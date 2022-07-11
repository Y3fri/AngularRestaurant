import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Departamento } from "../Models/departamento";
import { Municipio } from "../Models/municipio";
import { Response } from '../Models/response';


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiMaestroMunicipioService {
  
    url : string ='http://localhost:5267/api/MaestroMunicipios';
    constructor(
      private _http: HttpClient
    ) { }
  
    getMaestroMunicipio(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(municipio : Municipio): Observable<Response>{
      return this._http.post<Response>(this.url, municipio, httpOption);
    }
  
    Edit(municipio : Municipio): Observable<Response>{
      return this._http.put<Response>(this.url, municipio, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }