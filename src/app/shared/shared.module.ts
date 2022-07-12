import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoscontainerComponent } from './components/cursoscontainer/cursoscontainer.component';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, MaterialModule
  ]
})
export class SharedModule { }
