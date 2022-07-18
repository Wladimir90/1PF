import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './shared/components/home/home.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { ListadealumnosComponent } from './shared/components/listadealumnos/listadealumnos.component';
import { FormularioinscripcionComponent } from './shared/components/formularioinscripcion/formularioinscripcion.component';
import { CursosComponent } from './shared/components/cursos/cursos.component';
import { ForminscripcionComponent } from './shared/components/forminscripcion/forminscripcion.component';
import { CursoscontainerComponent } from './shared/components/cursoscontainer/cursoscontainer.component';
import { LoginComponent } from './guards/auth/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren:() => import('./guards/auth/login/login.module').then((m) => m.LoginModule)},
  {path: '', loadChildren:() => import('./shared/components/listadealumnos/listadealumnos.module').then((m) => m.ListadealumnosModule)},
  {path: '', loadChildren:() => import('./shared/components/cursoscontainer/cursoscontainer.module').then((m) => m.CursoscontainerModule)},
  {path: '', loadChildren:() => import('./shared/components/forminscripcion/forminscripcion.module').then((m) => m.ForminscripcionModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
