import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { UsuariosComponent } from './usuarios/usuarios.component';

import {Routes, RouterModule} from '@angular/router';
import { AddUsuariosComponent } from './usuarios/add-usuarios/add-usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SidebarModule} from 'ng-sidebar';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
const appRoutes: Routes = [

  {path: 'usuarios', component: UsuariosComponent},



];
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AddUsuariosComponent,
    ListUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule, RouterModule.forRoot(appRoutes)
  ], exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
