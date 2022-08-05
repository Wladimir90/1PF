import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DatosalumnosService } from 'src/app/services/datosalumnos.service';
import { Alumno } from '../../../interfaces/alumno';

@Component({
  selector: 'app-editaralumno',
  templateUrl: './editaralumno.component.html',
  styleUrls: ['./editaralumno.component.css']
})
export class EditaralumnoComponent implements OnInit {

  formularioEditar = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl("", [Validators.required, Validators.minLength(3)]),
    rut: new FormControl("", [Validators.required, Validators.pattern(/^[1-9]\d{0,10}$/)]),
    telefono: new FormControl("", [Validators.required, Validators.pattern(/^[1-9]\d{0,10}$/)]),
    email: new FormControl("", [Validators.required, Validators.email])
  })

  alumnoSelecionado: Alumno | null = null;

  constructor(@Optional() public dialogRef: MatDialogRef<EditaralumnoComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any) {
               }

  ngOnInit(): void { }

}
