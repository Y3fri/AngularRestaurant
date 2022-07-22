import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from '../Models/response';
import { Color } from "../Models/color";

const httpOption={
    headers : new HttpHeaders({
      'Contend-Type' : 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiColorService {
  
    url : string ='http://localhost:5267/api/Color';
    constructor(
      private _http: HttpClient
    ) { }
  
    getColor(): Observable<Response>{
      return this._http.get<Response>(this.url);
    }
  
    add(color: Color): Observable<Response>{
      return this._http.post<Response>(this.url, color, httpOption);
    }
  
    Edit(color: Color): Observable<Response>{
      return this._http.put<Response>(this.url, color, httpOption);
    }
  
    Delete(id: number): Observable<Response>{
      return this._http.delete<Response>(`${this.url}/${id}`);
    }
  }