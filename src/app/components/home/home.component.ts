import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  alumnos : Alumno[] = [];

  constructor() { 
    this.anadirAlumno(this.crearAlummno('Francisco', 'Santibañez', 195547858, 964147009, 'correo@correo.cl'));
  }

  anadirAlumno(alumno : Alumno) {
    this.alumnos.push(alumno);
  }

  crearAlummno(nombre: any, apellido: any, rut: any, telefono: any, email: any) : Alumno {
    return {
      nombre: nombre,
      apellido: apellido,
      rut: rut,
      telefono: telefono,
      email: email
    };
  }
  
  ngOnInit(): void {
    
  }
}
