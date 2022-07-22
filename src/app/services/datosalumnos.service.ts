import { Injectable } from '@angular/core';
import { catchError, EMPTY, firstValueFrom, lastValueFrom, map, Observable, of, throwError } from 'rxjs';
import { Alumno } from '../interfaces/alumno';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosalumnosService {
  
 

  /*  listaAlumnos: Alumno[] = [
    {nombre: 'Patricia', apellido: 'Almonacid', rut: 107950079, telefono: 995049695, email: 'patricia.almonacid@gmail.com'},
    {nombre: 'Jonathan', apellido: 'Leiva', rut: 150405040, telefono: 985830393, email: 'jonathan.leiva@gmail.com'},
    {nombre: 'Camila', apellido:'Montt', rut: 110594836, telefono: 994859358, email: 'camila.montt@gmail.com'},
    {nombre: 'Pablo', apellido: 'Muñoz', rut: 160495968, telefono: 995839493, email: 'pablomunoz@gmail.com'},
    {nombre: 'Juan', apellido: 'Perez', rut: 109685604, telefono: 989502106, email: 'juan.perez@gmail.com'},
    {nombre: 'Nancy', apellido: 'Rivas', rut: 170958495, telefono: 980958477, email: 'nancy.rivas@gmail.com'},
    {nombre: 'Jorge', apellido: 'Rojas', rut: 185948385, telefono: 998779456, email: 'jorge.rojas@gmail.com'},
    {nombre: 'Augusto', apellido: 'Silva', rut: 159876544, telefono: 989556744, email: 'augusto.silva@gmail.com'},
    {nombre: 'Samuel', apellido: 'Silva', rut: 189485749, telefono: 999546856, email: 'samuel.silva@gmail.com'},
    {nombre: 'Valeria', apellido: 'Vera', rut: 185850983, telefono: 980045688, email: 'valeria.vera@gmail.com'},
      
     ]; */
    

  constructor(private http : HttpClient) { }

  cantidadAlumnoObservable(data:any) { 
    let contador = 1;
    return of (data).pipe(
      map ((data) => data.length),
      catchError((error) => {throw new Error (error)})
    )
  }
    //Obtiene lista completa de alumnos promesa.
 /*  obtenerAlumnos():Promise<[]>{
    return new Promise((resolve, reject) => {
      if(this.listaAlumnos.length != 0){
        const lista:any = this.listaAlumnos;
        return resolve (lista)
      }else{
        reject ({mensaje: 'Error al cargar lista de alumno.'})
      }
    })
  } */

  async obtenerAlumnos():Promise<any>{
      return this.http
      .get('https://62ce15a7066bd2b6992faf7d.mockapi.io/api/v1/alumno').toPromise();
  }

  /* getObtenerAlumnos(id: number):Observable<Alumno>{
    return this.http.get<Alumno>('https://62ce15a7066bd2b6992faf7d.mockapi.io/api/v1/alumno/${ id }'); 
  }*/
}