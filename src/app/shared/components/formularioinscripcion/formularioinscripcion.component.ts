import { Component, EventEmitter, OnInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Alumno } from '../../../interfaces/alumno';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formularioinscripcion',
  templateUrl: './formularioinscripcion.component.html',
  styleUrls: ['./formularioinscripcion.component.css']
})
export class FormularioinscripcionComponent implements OnInit {

  formularioInscripcion = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl("", [Validators.required, Validators.minLength(3)]),
    rut: new FormControl("", [Validators.required, Validators.pattern(/^[1-9]\d{6,10}$/)]),
    telefono: new FormControl("", [Validators.required, Validators.pattern(/^[1-9]\d{6,10}$/)]),
    email: new FormControl("", [Validators.required, Validators.email])
  })

  constructor(private fb: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<FormularioinscripcionComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: Alumno) {}

  mostrarFormulario(): void {
    Swal.fire({
      icon: 'success',
      title: 'Felicidades, estás inscrito'
    })

  }

  onSubmit(form:any){
     
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {  }


}
