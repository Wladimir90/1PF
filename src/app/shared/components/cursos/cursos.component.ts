import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosalumnosService } from 'src/app/services/datosalumnos.service';
import { FormularioinscripcionComponent } from '../formularioinscripcion/formularioinscripcion.component';
import { DataSource } from '@angular/cdk/table';
import { Alumno } from 'src/app/interfaces/alumno';
import { Observable } from 'rxjs';
import { NombreapellidoPipe } from 'src/app/pipes/nombreapellido.pipe';
import Swal from 'sweetalert2';
import { EditaralumnoComponent } from '../editaralumno/editaralumno.component';
import {MatTable, MatTableDataSource } from '@angular/material/table';

const listaAlumnos: Alumno[] = [];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'rut', 'telefono', 'email', 'acciones'];
  datosFormulario: any[] = [];

  dataSource = listaAlumnos;
  cantidadAlumno$: Observable<number | null> | null = null;

  /* @Input() tituloCurso: string = "";
  @Input() profesor: string = "";
  @Input() calificacion: string = ""; */
  constructor(public dialog: MatDialog, private datosalumnosService: DatosalumnosService) { }

  openDialog(): void{
    const dialogRef = this.dialog.open(FormularioinscripcionComponent, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data.length !== 0){
        this.dataSource = [...this.dataSource, data];
        this.cantidadAlumno$ = this.datosalumnosService.cantidadAlumnoObservable(this.dataSource);
      }else{
      }
    });
  }

  openDialogEdit(datosFormulario:any): void{
    const dialogRef = this.dialog.open(EditaralumnoComponent, {
      width: '100%',
      data: datosFormulario
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data !== "false"){
        if(data !== undefined || data.length > 0){
          Swal.fire({
            icon: 'success',
            title: 'Usuario actualizado'
          })
        }
      }
      
    });

  }

  deleteUser(data:any){

    Swal.fire({
      title: '¿Desea eliminar a este alumno?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataSource.splice(this.dataSource.findIndex(element => element.rut === data.rut),1);
        this.dataSource = [...this.dataSource];
        this.cantidadAlumno$ = this.datosalumnosService.cantidadAlumnoObservable(this.dataSource);
        Swal.fire(
          'Eliminado',
          'El alumno ha sido eliminado con éxito.',
          'success'
        )
      }
    })
  }

  ngOnInit(): void {
  }

}
