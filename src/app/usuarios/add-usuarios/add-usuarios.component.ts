import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService  } from '../shared/usuario.service';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.component.html',
  styleUrls: ['./add-usuarios.component.css']
})
export class AddUsuariosComponent implements OnInit {

  constructor(public addusuarioservice: UsuarioService,  public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form != null){form.reset(); }
    this.addusuarioservice.formData = {
      id: '',
      nombre: '',
      cedula: '',
      fecha: '',
      email: '',
      telefono: '',
      organizacion: '',
    }

  }
  onSubmit(form: NgForm){
    if (form.value.id == null){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.addusuarioservice.postUsuario(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.addusuarioservice.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.addusuarioservice.postUsuario(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.addusuarioservice.refreshList();
    });

  }

}
