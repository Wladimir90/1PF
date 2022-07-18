import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CursoscontainerComponent } from './cursoscontainer.component';

const routes: Routes = [
  {path: '', component:CursoscontainerComponent},
  {path: 'cursos', component:CursoscontainerComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoscontainerRoutingModule { }
