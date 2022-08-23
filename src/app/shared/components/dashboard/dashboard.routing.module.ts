import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadealumnosComponent } from '../listadealumnos/listadealumnos.component';
import { ForminscripcionComponent } from '../forminscripcion/forminscripcion.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';
import { CursosComponent } from '../cursos/cursos.component';



const routes: Routes = [
  {path: '', component:DashboardComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'alumnos', component: ListadealumnosComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'inscripciones', component: ForminscripcionComponent}
  ] }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }