import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forminscripcion',
  templateUrl: './forminscripcion.component.html',
  styleUrls: ['./forminscripcion.component.css']
})
export class ForminscripcionComponent implements OnInit {

  formInscripcion = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl("", [Validators.required, Validators.minLength(3)]),
    rut: new FormControl("", [Validators.required, Validators.pattern(/^[1-9]\d{6,10}$/)]),
    telefono: new FormControl("", [Validators.required, Validators.pattern(/^[1-9]\d{6,10}$/)]),
    email: new FormControl("", [Validators.required, Validators.email])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  mostrarFormulario(): void {
    Swal.fire({
      icon: 'success',
      title: 'Felicidades, estás inscrito'
    })
  }

  onSubmit(form:any){
     
  }

}
