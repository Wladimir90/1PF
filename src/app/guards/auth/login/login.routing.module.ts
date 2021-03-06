import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { ListadealumnosComponent } from '../../../shared/components/listadealumnos/listadealumnos.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
