import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  alumnos : Alumno[] = [];

  constructor() { 
  }

  anadirAlumno(alumno : Alumno) {
    this.alumnos.push(alumno);
  }

  /* crearAlummno(nombre: any, apellido: any, rut: any, telefono: any, email: any) : Alumno {
    return {
      nombre: nombre,
      apellido: apellido,
      rut: rut,
      telefono: telefono,
      email: email
    };
  } */

  crearAlummno(id:any, nombre: any, apellido: any, rut: any, telefono: any, email: any) : Alumno {
    return {
      id : id,
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
