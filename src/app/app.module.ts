import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './components/home/home.component';
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
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadealumnosComponent,
    NombreapellidoPipe,
    TamanofuenteDirective,
    FormularioinscripcionComponent,
    NombreapellidoPipe,
    EditaralumnoComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
