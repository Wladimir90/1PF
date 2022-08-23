import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';






@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule, MaterialModule, HomeRoutingModule,
  ],
})
export class HomeModule { }