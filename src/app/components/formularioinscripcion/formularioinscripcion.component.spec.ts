import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioinscripcionComponent } from './formularioinscripcion.component';

describe('FormularioinscripcionComponent', () => {
  let component: FormularioinscripcionComponent;
  let fixture: ComponentFixture<FormularioinscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioinscripcionComponent ]
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
