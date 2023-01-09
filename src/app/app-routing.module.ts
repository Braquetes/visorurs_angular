import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './client/articulos/articulos.component';
import { CategoriasComponent } from './client/categorias/categorias.component';
import { FormArticuloComponent } from './client/form-articulo/form-articulo.component';
import { FormCategoriaComponent } from './client/form-categoria/form-categoria.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'articulos',
    component: ArticulosComponent
  },
  {
    path: 'form-articulo',
    component: FormArticuloComponent
  },
  {
    path: 'form-articulo/:id',
    component: FormArticuloComponent
  },
  {
    path: 'form-categoria',
    component: FormCategoriaComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
