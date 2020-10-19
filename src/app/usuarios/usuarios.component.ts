import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Usuarios} from '../interfaces/usuario';
import {UsuariosService} from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  user = null;
  message = '';
  usuarios: Usuarios[] = [];


  constructor(public usuarioService: UsuariosService, public router: Router ) { }

  ngOnInit() {
    this.usuarioService.getUsuarios()
      .subscribe(
        res => {
          this.usuarios = res;
        },
        err => console.log(err)
      )
  }

  deleteUsuario(): void {
    this.usuarioService.deleteUsuario(this.user.id)
      .subscribe(res => {
        console.log(res);
        this.message = 'Producto eliminado!';
        console.log('eliminado');
      });
  }




}
