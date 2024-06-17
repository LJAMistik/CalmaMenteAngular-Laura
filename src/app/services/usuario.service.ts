import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = "http://localhost:9090/usuario";

  constructor(private http: HttpClient) {}

  public register(usuario:UserType) {
    return this.http.post<UserType>(this.baseUrl, usuario)
  }
  
  // public getUser(email:string) {
  //   return this.http.get<UserType>(`${this.baseUrl}/${email}`);
  // }
}

