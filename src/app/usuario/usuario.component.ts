import { Component, OnInit } from '@angular/core';
import { usuarioModel } from './usuarioModel';
import { usuarioService } from "./usuarioService";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: usuarioModel[] = [];  
  usuarioNuevo: usuarioModel = new usuarioModel();
  filtro!: string; 
  constructor(public usuarioService: usuarioService) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsuarios();
  }
    
  Eliminar(usuario:usuarioModel){
    this.usuarios = this.usuarioService.deleteUsuario(usuario);
  }
  Crear(usuario:usuarioModel){
    this.usuarios = this.usuarioService.postUsuarios(usuario);
  }
  Buscar(){
    this.usuarios = this.usuarioService.filtrarUsuario(this.filtro); 
  }
}
