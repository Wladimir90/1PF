import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ListadealumnosComponent } from './listadealumnos.component';
import { NombreapellidoPipe } from 'src/app/pipes/nombreapellido.pipe';
import { ListadealumnosRoutingModule } from './listadealumnos.routing.module';
import { TamanofuenteDirective } from 'src/app/directives/tamanofuente.directive';



@NgModule({
  declarations: [ ListadealumnosComponent, NombreapellidoPipe, TamanofuenteDirective ],
  imports: [
    CommonModule, MaterialModule, ListadealumnosRoutingModule
  ],
})
export class ListadealumnosModule { }