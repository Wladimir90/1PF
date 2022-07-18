import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadealumnosComponent } from './listadealumnos.component';
import { AuthGuard } from '../../../guards/auth/auth.guard';

const routes: Routes = [
  {path: '', component:ListadealumnosComponent},
  {path: 'alumnos', component:ListadealumnosComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadealumnosRoutingModule { }
