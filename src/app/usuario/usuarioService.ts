import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { usuarioModel } from "./usuarioModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class usuarioService {
    usuarios: usuarioModel[] = [];
    constructor() {
        let usuario1 = new usuarioModel("POST1", "Hola como esta", "Eliminar")
        let usuario2 = new usuarioModel("POST2", "Hola como esta", "Eliminar")
        let usuario3 = new usuarioModel("POST2", "Hola como esta", "Eliminar")
        let usuario4 = new usuarioModel("POST2", "Hola como esta", "Eliminar")
        let usuario5 = new usuarioModel("POST2", "Hola como esta", "Eliminar")
        this.usuarios.push(usuario1);
        this.usuarios.push(usuario2);
        this.usuarios.push(usuario3);
        this.usuarios.push(usuario4);
        this.usuarios.push(usuario5);
    }

    getUsuarios(): usuarioModel[] {
        return this.usuarios;
    }
    postUsuarios(nuevo: usuarioModel): usuarioModel[] {
       
        if (nuevo != undefined || nuevo != null) {
            this.usuarios.push(nuevo);
        }
        return this.usuarios;
    }
    deleteUsuario(borrar: usuarioModel): usuarioModel[] {
        if (borrar != undefined || borrar != null) {
            this.usuarios = this.usuarios.filter(x => x.Nombre !== borrar.Nombre && x.Descripcion !== borrar.Descripcion)
        }
        return this.usuarios;
    }
    filtrarUsuario(filtro: string): usuarioModel[] {
       
        let usuariosRes: usuarioModel[] = [];
        this.usuarios.forEach(e => {
            if (e.Nombre == filtro)
                usuariosRes.push(e);
        });
        return usuariosRes;
    }
}