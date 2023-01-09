import { Component } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  categorias: any;

  constructor(private API: ApiService){}

  ngOnInit(){
    this.getArt();
  }

  getArt(){
    this.API.getCategorias().subscribe((data: any) => {
      this.categorias = data.data;
      console.log(this.categorias);
    });
  }

  eliminar(id: number){
    console.log(id);
    this.API.deleteCategoria(id).subscribe((data: any) => {
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
