import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent {
  
  articulos: any;

  constructor(private API: ApiService, private router: Router){}

  ngOnInit(){
    this.getArt();
  }

  getArt(){
    this.API.getArticulos().subscribe((data: any) => {
      this.articulos = data.data;
      console.log(this.articulos);
    });
  }

  editar(id: number){
    this.router.navigate(['/form-articulo/',id])
  }

  eliminar(id: number){
    console.log(id);
    this.API.deleteArticulo(id).subscribe((data: any) => {
      console.log(data);
      this.getArt();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

}
