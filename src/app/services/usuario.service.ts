import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = "http://localhost:9090/usuario";

  constructor(private http: HttpClient) {}

  // INSERIDO POR LAURA
  public register(usuario: UserType): Observable<UserType> {
    return this.http.post<UserType>(this.baseUrl, usuario);
  }
  
  public getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/profile`);
  }

  public updateUserProfile(userData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/profile`, userData);
  }
  
  public getUser(email: string): Observable<UserType> {
    return this.http.get<UserType>(`${this.baseUrl}/${email}`);
  }

  public getProfessionalProfile(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/professional-profile`);
  }

  public updateProfessionalProfile(userData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/professional-profile`, userData);
  }
  // FIM DA INSERÇÃO POR LAURA
  
}

