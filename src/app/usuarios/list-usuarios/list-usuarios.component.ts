import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  UsuarioService } from '../shared/usuario.service';
import { Usuarios } from '../shared/usuario';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  constructor(public addusuarioservice: UsuarioService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.addusuarioservice.refreshList();
  }
  populateForm(usuario: Usuarios) {
    this.addusuarioservice.formData = Object.assign({}, usuario);
  }

  onDelete(id: number) {
    if (confirm('Esta seguro de elimimar el registro?')) {
      this.addusuarioservice.deleteUsuario(id).subscribe(res => {
        this.addusuarioservice.refreshList();
        this.toastr.warning('Registro Eliminado', 'EMP. Register');
      });
    }
  }

}
