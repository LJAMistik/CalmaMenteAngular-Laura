 // INSERIDO POR LAURA
 import { Component, OnInit } from '@angular/core';
 import { UsuarioService } from '../../services/usuario.service';
 
 @Component({
   selector: 'app-edit-profile',
   templateUrl: './user-edit.component.html',
   styleUrls: ['./user-edit.component.css']
 })
 export class UserEditComponent implements OnInit {
   user: any = {};
 
   constructor(private usuarioService: UsuarioService) { }
 
   ngOnInit(): void {
     this.getUserProfile();
   }
 
   getUserProfile(): void {
     this.usuarioService.getUserProfile().subscribe(
       (data: any) => {
         this.user = data;
       },
       (error: any) => {
         console.error('Erro ao buscar perfil do usuário', error);
       }
     );
   }
 
   onSubmit(): void {
     this.usuarioService.updateUserProfile(this.user).subscribe(
       (response: any) => {
         alert('Perfil atualizado com sucesso!');
       },
       (error: any) => {
         console.error('Erro ao atualizar perfil', error);
       }
     );
   }
 }
 