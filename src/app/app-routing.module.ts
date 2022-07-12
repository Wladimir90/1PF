import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './shared/components/home/home.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { ListadealumnosComponent } from './shared/components/listadealumnos/listadealumnos.component';
import { FormularioinscripcionComponent } from './shared/components/formularioinscripcion/formularioinscripcion.component';
import { CursosComponent } from './shared/components/cursos/cursos.component';
import { ForminscripcionComponent } from './shared/components/forminscripcion/forminscripcion.component';
import { CursoscontainerComponent } from './shared/components/cursoscontainer/cursoscontainer.component';

const routes: Routes = [
  {path: '', redirectTo: 'alumnos', pathMatch: 'full'},
  {path: 'alumnos', component:ListadealumnosComponent},
  {path: 'cursos', component:CursoscontainerComponent},
  {path: 'inscripciones', component:ForminscripcionComponent},
  {path: '**', redirectTo: 'alumnos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
