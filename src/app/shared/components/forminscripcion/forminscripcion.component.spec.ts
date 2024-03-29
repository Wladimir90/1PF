import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ForminscripcionComponent } from './forminscripcion.component';

describe('ForminscripcionComponent', () => {
  let component: ForminscripcionComponent;
  let fixture: ComponentFixture<ForminscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForminscripcionComponent ],
      providers: [
        FormBuilder,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForminscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
