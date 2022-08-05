import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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

/* import { NgModule } from '@angular/core';
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
export class LoginModule { } */