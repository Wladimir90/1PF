import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ForminscripcionComponent } from './forminscripcion.component';
import { ForminscripcionRoutingModule } from './forminscripcion.routing.module';




@NgModule({
  declarations: [ ForminscripcionComponent, ],
  imports: [
    CommonModule, MaterialModule, ForminscripcionRoutingModule
  ],
})
export class ForminscripcionModule { }