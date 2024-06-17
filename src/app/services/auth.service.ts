// INSERIDO POR LAURA
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey: string = 'authToken';

  constructor() {}

  // Método para verificar se o usuário está logado
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // Método para fazer login (apenas um exemplo simples)
  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Método para fazer logout
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Método para obter o token (se necessário)
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}