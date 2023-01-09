import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'http://visorus.ddns.net:8091';

  constructor(private http: HttpClient) { }

  getArticulos(){
    return this.http.get(`${this.URL}/articulo`);
  }
  
  getCategorias(){
    return this.http.get(`${this.URL}/categoria`);
  }

  createCategoria(categoria: Categoria){
    return this.http.post(`${this.URL}/categoria`, categoria);
  }
  
  createArticulo(articulo: Articulo){
    return this.http.post(`${this.URL}/articulo`, articulo);
  }
  
  updateArticulo(id:number, articulo: Articulo){
    return this.http.put(`${this.URL}/articulo/${id}`, articulo);
  }
  
  deleteCategoria(id: number){
    return this.http.delete(`${this.URL}/categoria/${id}`);
  }

  deleteArticulo(id: number){
    return this.http.delete(`${this.URL}/articulo/${id}`);
  }

  getOneArticulo(id: number){
    return this.http.get(`${this.URL}/articulo/${id}`);
  }
}
