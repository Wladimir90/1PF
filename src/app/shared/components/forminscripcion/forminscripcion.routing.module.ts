import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForminscripcionComponent } from './forminscripcion.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:ForminscripcionComponent},
  {path: 'inscripciones', component:ForminscripcionComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForminscripcionRoutingModule { }
