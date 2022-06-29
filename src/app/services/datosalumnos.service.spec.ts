import { TestBed } from '@angular/core/testing';

import { DatosalumnosService } from './datosalumnos.service';

describe('DatosalumnosService', () => {
  let service: DatosalumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosalumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
