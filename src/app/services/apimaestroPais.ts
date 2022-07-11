import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from '../Models/response';
import { Pais } from "../Models/pais";

const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiMaestroPaisService {
  
    url : string ='http://localhost:5267/api/MaestroPais';
    constructor(
      private _http: HttpClient
    ) { }
  
    getMaestroPais(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(pais : Pais): Observable<Response>{
      return this._http.post<Response>(this.url, pais, httpOption);
    }
  
    Edit(pais : Pais): Observable<Response>{
      return this._http.put<Response>(this.url, pais, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }