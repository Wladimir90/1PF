import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './shared/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioinscripcionComponent } from './shared/components/formularioinscripcion/formularioinscripcion.component';
import { EditaralumnoComponent } from './shared/components/editaralumno/editaralumno.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioinscripcionComponent,
    EditaralumnoComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
