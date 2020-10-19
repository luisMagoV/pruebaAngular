import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Usuarios} from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  formData: Usuarios;
  list: Usuarios[];
  readonly rootURL = 'http://webapi.localhost.net:8080/api';

  selectedUsuario: Usuarios;

  constructor(public http: HttpClient) { }
  postUsuario(formData: Usuarios){
    return this.http.post(this.rootURL+'/usuarios', formData);
   }

   refreshList(){
    this.http.get(this.rootURL+'/usuarios')
    .toPromise().then(res => this.list = res as Usuarios[]);
  }

  putUsuario(formData: Usuarios){
    return this.http.put(this.rootURL+'/usuarios/update'+formData.id,formData);

   }

   deleteUsuario(id: number){
    return this.http.delete(this.rootURL+'/usuario/'+id);
   }
}
