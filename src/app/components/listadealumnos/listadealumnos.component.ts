import {Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Alumno } from '../../interfaces/alumno';
import { NombreapellidoPipe } from '../../pipes/nombreapellido.pipe';
import { FormularioinscripcionComponent } from '../formularioinscripcion/formularioinscripcion.component';
import { EditaralumnoComponent } from '../editaralumno/editaralumno/editaralumno.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

const listaAlumnos: Alumno[] = [
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
    
  ];

@Component({
  selector: 'app-listadealumnos',
  templateUrl: './listadealumnos.component.html',
  styleUrls: ['./listadealumnos.component.css']
})
export class ListadealumnosComponent {
  displayedColumns: string[] = ['nombre', 'rut', 'telefono', 'email', 'acciones'];
  dataSource = listaAlumnos;
  datosFormulario: any[] = [];

  constructor(public dialog: MatDialog) {}

  openDialog(): void{
    const dialogRef = this.dialog.open(FormularioinscripcionComponent, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data.length !== 0){
        this.dataSource = [...this.dataSource, data]
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
        this.dataSource = [...this.dataSource]
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
