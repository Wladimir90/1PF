import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './shared/components/home/home.component';
import { ListadealumnosComponent } from './shared/components/listadealumnos/listadealumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NombreapellidoPipe } from './pipes/nombreapellido.pipe';
import { TamanofuenteDirective } from './directives/tamanofuente.directive';
import { FormularioinscripcionComponent } from './shared/components/formularioinscripcion/formularioinscripcion.component';
import { EditaralumnoComponent } from './shared/components/editaralumno/editaralumno.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { CursosComponent } from './shared/components/cursos/cursos.component';
import { CursoscontainerComponent } from './shared/components/cursoscontainer/cursoscontainer.component';
import { ForminscripcionComponent } from './shared/components/forminscripcion/forminscripcion.component';


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
    CursosComponent,
    CursoscontainerComponent,
    ForminscripcionComponent
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
