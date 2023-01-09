import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Articulo } from 'src/app/models/articulo';
import { Precio } from 'src/app/models/precio';
import { ApiService } from 'src/app/providers/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent {

  miFormulario: FormGroup = this.fb.group({
    clave: ['',[Validators.required]],
    fechaCreado: ['',[Validators.required]],
    nombre: ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router, private API: ApiService) { }

  ngOnInit(){
    this.miFormulario.setValue({
      clave: '',
      fechaCreado: '',
      nombre: '',
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }
  
  checkbox(campo: string){
    return this.miFormulario.controls[campo].errors;
  }

  save(){
    console.log(this.miFormulario.value);
    this.API.createCategoria(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if(data.message){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Guardado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }
  
}
