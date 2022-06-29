import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadealumnosComponent } from './listadealumnos.component';

describe('ListadealumnosComponent', () => {
  let component: ListadealumnosComponent;
  let fixture: ComponentFixture<ListadealumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadealumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadealumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
