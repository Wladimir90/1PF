import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { CursoscontainerComponent } from './cursoscontainer.component';
import { CursoscontainerRoutingModule } from './cursoscontainer.routing.module';
import { CursosComponent } from '../cursos/cursos.component';



@NgModule({
  declarations: [ CursoscontainerComponent, CursosComponent ],
  imports: [
    CommonModule, MaterialModule, CursoscontainerRoutingModule
  ],
})
export class CursoscontainerModule { }