import {Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Alumno } from '../../interfaces/alumno';
import { NombreapellidoPipe } from '../../pipes/nombreapellido.pipe';
import { FormularioinscripcionComponent } from '../formularioinscripcion/formularioinscripcion.component';
import { EditaralumnoComponent } from '../editaralumno/editaralumno/editaralumno.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosalumnosService } from 'src/app/services/datosalumnos.service';
import Swal from 'sweetalert2';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

const listaAlumnos: Alumno[] = [];

@Component({
  selector: 'app-listadealumnos',
  templateUrl: './listadealumnos.component.html',
  styleUrls: ['./listadealumnos.component.css']
})
export class ListadealumnosComponent {
  displayedColumns: string[] = ['nombre', 'rut', 'telefono', 'email', 'acciones'];
  dataSource = listaAlumnos;
  datosFormulario: any[] = [];

  cantidadAlumno$: Observable<number | null> | null = null;
  susbcriptions: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private datosalumnosService: DatosalumnosService) {}

  openDialog(): void{
    const dialogRef = this.dialog.open(FormularioinscripcionComponent, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data.length !== 0){
        this.dataSource = [...this.dataSource, data];
        this.cantidadAlumno$ = this.datosalumnosService.cantidadAlumnoObservable(this.dataSource);
      }else{
        alert('sin cambios');
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
    this.datosalumnosService.obtenerAlumnos()
    .then((data) => 
        {
          this.dataSource = data;
          this.cantidadAlumno$ = this.datosalumnosService.cantidadAlumnoObservable(data);
        
        })

  }

  ngOnDestroy() { 
    this.susbcriptions.unsubscribe()
  }
  
}
