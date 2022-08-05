import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MockModule, MockService } from 'ng-mocks';

import { FormularioinscripcionComponent } from './formularioinscripcion.component';

describe('FormularioinscripcionComponent', () => {
  let component: FormularioinscripcionComponent;
  let fixture: ComponentFixture<FormularioinscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioinscripcionComponent ],
      imports: [
        MockModule(MatDialogModule),
      ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
