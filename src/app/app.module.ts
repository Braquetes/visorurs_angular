import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticulosComponent } from './client/articulos/articulos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CategoriasComponent } from './client/categorias/categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArticuloComponent } from './client/form-articulo/form-articulo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormCategoriaComponent } from './client/form-categoria/form-categoria.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticulosComponent,
    NavbarComponent,
    CategoriasComponent,
    FormArticuloComponent,
    FormCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
