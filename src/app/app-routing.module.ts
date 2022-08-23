import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { ListadealumnosComponent } from './shared/components/listadealumnos/listadealumnos.component';
import { FormularioinscripcionComponent } from './shared/components/formularioinscripcion/formularioinscripcion.component';
import { CursosComponent } from './shared/components/cursos/cursos.component';
import { ForminscripcionComponent } from './shared/components/forminscripcion/forminscripcion.component';
import { LoginComponent } from './guards/auth/login/login.component';




/* const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: '', canActivateChild:[Auth2Guard], loadChildren: () => import('./modules/container/container.module').then(m => m.ContainerModule) },
  {
    path:'**',
    redirectTo: ''
  }
]; */



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren:() => import('./guards/auth/login/login.module').then((m) => m.LoginModule)},
  {path: '', loadChildren:() => import('./shared/components/dashboard/dashboard.module').then((m) => m.DashboardModule)},
  {path: '', loadChildren:() => import('./shared/components/home/home.module').then((m) => m.HomeModule)},
  {path: '', loadChildren:() => import('./shared/components/listadealumnos/listadealumnos.module').then((m) => m.ListadealumnosModule)},
  {path: '', loadChildren:() => import('./shared/components/cursos/cursos.module').then((m) => m.CursosModule)},
  {path: '', loadChildren:() => import('./shared/components/forminscripcion/forminscripcion.module').then((m) => m.ForminscripcionModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
