import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListadealumnosComponent } from './components/listadealumnos/listadealumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NombreapellidoPipe } from './pipes/nombreapellido.pipe';
import { TamanofuenteDirective } from './directives/tamanofuente.directive';
import { DatosalumnosService } from './services/datosalumnos.service';
import { FormularioinscripcionComponent } from './components/formularioinscripcion/formularioinscripcion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditaralumnoComponent } from './components/editaralumno/editaralumno/editaralumno.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    ListadealumnosComponent,
    NombreapellidoPipe,
    TamanofuenteDirective,
    FormularioinscripcionComponent,
    NombreapellidoPipe,
    EditaralumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
