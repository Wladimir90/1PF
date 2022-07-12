import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoscontainerComponent } from './cursoscontainer.component';

describe('CursoscontainerComponent', () => {
  let component: CursoscontainerComponent;
  let fixture: ComponentFixture<CursoscontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoscontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
