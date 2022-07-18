import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';





@NgModule({
  declarations: [ LoginComponent, ],
  imports: [
    CommonModule, MaterialModule, LoginRoutingModule
  ],
})
export class LoginModule { }