import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuarioService} from './shared/usuario.service';
import { Usuarios} from './shared/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  user = null;
  message = '';
  usuarios: Usuarios[] = [];


  constructor(public usuarioService: UsuarioService, public router: Router ) { }

  ngOnInit() {

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
