import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListadealumnosComponent } from './listadealumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { MockModule, MockService } from 'ng-mocks';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { DatosalumnosService } from 'src/app/services/datosalumnos.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListadealumnosComponent', () => {
  let component: ListadealumnosComponent;
  let fixture: ComponentFixture<ListadealumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListadealumnosComponent 
      ],
      imports: [
        MockModule(MaterialModule),
        MockModule(HttpClientModule),
      ],

      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadealumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });
});
