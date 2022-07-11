import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from '../Models/response';
import { Sede } from "../Models/sede";


const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiSedeService {
  
    url : string ='http://localhost:5267/api/RestauranteSede';
    constructor(
      private _http: HttpClient
    ) { }
  
    getSede(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(sede : Sede): Observable<Response>{
      return this._http.post<Response>(this.url, sede, httpOption);
    }
  
    Edit(sede : Sede): Observable<Response>{
      return this._http.put<Response>(this.url, sede, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }