import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Articulo } from 'src/app/models/articulo';
import { Precio } from 'src/app/models/precio';
import { ApiService } from 'src/app/providers/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-articulo',
  templateUrl: './form-articulo.component.html',
  styleUrls: ['./form-articulo.component.scss']
})
export class FormArticuloComponent {

  miFormulario: FormGroup = this.fb.group({
    clave: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    precios: [''],
    activo: ['', []],
  });

  precio: Array<any> = [];

  id: any;
  articulo: Articulo | any;

  constructor(private fb: FormBuilder, private router: Router, private API: ApiService, private AR: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.AR.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
      this.API.getOneArticulo(this.id).subscribe((data: any) => {
        console.log(data);
        this.articulo = data;
        this.miFormulario.setValue({
          clave: this.articulo?.clave,
          categoria: this.articulo?.categoria.id,
          nombre: this.articulo?.nombre,
          precios: '',
          activo: this.articulo?.activo,
        });
        for(const val of data.precios){
          console.log(val.precio);
          this.add(val.precio);
        }
      });
    }
    
    this.miFormulario.setValue({
      clave: '',
      categoria: '',
      nombre: '',
      precios: [],
      activo: '',
    });
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  checkbox(campo: string) {
    return this.miFormulario.controls[campo].errors;
  }

  add(value: number) {
    const result = this.precio.filter((n: any, i: any) => { return n.precio == value; })
    if (result.length > 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Registrado',
        showConfirmButton: false,
        timer: 750
      })
    } else {
      this.precio.push({ precio: value });
      console.log(this.precio);
      this.miFormulario.get('precios')?.reset();
    }
  }

  eliminar(value: number) {
    console.log(value);
    const result = this.precio.filter((n: any, i: any) => { return n.precio != value; })
    console.log(result);
    this.precio = result;
  }

  save() {
    this.miFormulario.value.precios = this.precio;
    console.log(this.miFormulario.value);
    this.API.createArticulo(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if (data.message) {
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

  actualizar(){
    this.miFormulario.value.precios = this.precio;
    console.log(this.miFormulario.value);
    this.API.updateArticulo(this.id,this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if (data.message) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Actualizado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }

}
