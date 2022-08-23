import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { CursosComponent } from '../cursos/cursos.component';
import { CursosRoutingModule } from './cursos.routing.module';



@NgModule({
  declarations: [ CursosComponent ],
  imports: [
    CommonModule, MaterialModule, CursosRoutingModule
  ],
})
export class CursosModule { }