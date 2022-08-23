import { Injectable } from '@angular/core';
import { catchError, EMPTY, firstValueFrom, lastValueFrom, map, Observable, of, throwError } from 'rxjs';
import { Alumno } from '../interfaces/alumno';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
/* import { Icurso } from '../interfaces/curso'; */

@Injectable({
  providedIn: 'root'
})
export class DatosalumnosService {

  /* listaCursos: Icurso[] = [
    {id: 1, curso: 'JavaScript', estado:''},
    {id: 2, curso: 'TypeScript', estado:''},
    {id: 3, curso: 'Wordpress', estado:''}
    
     ]; */
    

  constructor(private http : HttpClient) { }

  cantidadAlumnoObservable(data:any) { 
    let contador = 1;
    return of (data).pipe(
      map ((data) => data.length),
      catchError((error) => {throw new Error (error)})
    )
  }

  async obtenerAlumnos():Promise<any>{
      return this.http
      .get('https://62ce15a7066bd2b6992faf7d.mockapi.io/api/v1/alumno').toPromise();
  }

 /*  async obtenerCursos():Promise<any>{
    return this.http
    .get('listaCursos').toPromise();
} */

}