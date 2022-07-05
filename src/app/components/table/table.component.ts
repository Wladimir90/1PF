import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Alumno } from '../../interfaces/alumno';
import { NombreapellidoPipe } from '../../pipes/nombreapellido.pipe';
import { FormularioinscripcionComponent } from '../formularioinscripcion/formularioinscripcion.component';
import { EditaralumnoComponent } from '../editaralumno/editaralumno/editaralumno.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DatosalumnosService } from 'src/app/services/datosalumnos.service';
import { findIndex, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'rut', 'telefono', 'email', 'acciones'];
  
  /* Viene del Servicio y es un Observable */
  /* obtenerListaAlumnos$: Observable<Alumno | null> | null = null; */
  
  error: {mensaje: string} | null = null;

  susbcriptions: Subscription = new Subscription();

  dataSource = [];
  datosFormulario: any[] = [];

  constructor(private datosalumnosService: DatosalumnosService, public dialog: MatDialog) {}

  openDialog(): void{
    const dialogRef = this.dialog.open(FormularioinscripcionComponent, {
      width: '100%'
    });

    /* dialogRef.afterClosed().subscribe(data => {
      if(data.length !== 0){
        this.dataSource = [...this.dataSource, data]
      }
      
    }); */
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

    /* Swal.fire({
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
        this.dataSource = [...this.dataSource]
        Swal.fire(
          'Eliminado',
          'El alumno ha sido eliminado con éxito.',
          'success'
        )
      }
    }) */
  }


  ngOnInit(): void { 
      /*  Viene del Servicio y es un Observable  */
    /* this.obtenerListaAlumnos$ = this.datosalumnosService.obtenerListaAlumnos(0); */
    this.datosalumnosService.obtenerAlumnos()
    .then((result) => this.dataSource = result)
    .catch((error) => this.dataSource = []);
    
  }
  

  ngOnDestroy() { 
    this.susbcriptions.unsubscribe()
  }

}

