import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SidenavComponent } from '../../../core/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';





@NgModule({
  declarations: [ DashboardComponent, SidenavComponent ],
  imports: [
    CommonModule, MaterialModule, DashboardRoutingModule,
  ],
})
export class DashboardModule { }