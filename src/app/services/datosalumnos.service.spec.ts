import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';

import { DatosalumnosService } from './datosalumnos.service';
import { Alumno } from '../interfaces/alumno';
import { HttpClientModule } from '@angular/common/http';
import { MockModule } from 'ng-mocks';
import { Subscription } from 'rxjs';

fdescribe('DatosalumnosService', () => {
  let service: DatosalumnosService;
  let httpController: HttpTestingController;
  const mockResp: Alumno [] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(HttpClientModule),
        HttpClientTestingModule
      ],

      providers: []
    });
    service = TestBed.inject(DatosalumnosService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('peticion de alumnos', () => {
    service.obtenerAlumnos().then((alumnos) => 
    expect(alumnos).toEqual(mockResp))

    const req = httpController.expectOne({method: 'GET', url: 'https://62ce15a7066bd2b6992faf7d.mockapi.io/api/v1/alumno'});
    req.flush(mockResp);
    
    /* expectOne({method: 'GET', url: 'https://62ce15a7066bd2b6992faf7d.mockapi.io/api/v1/alumno'}); */
    /* req.flush(mockResp) */
  });

  /* it('enviar lista de alumnos', () => {
    service.obtenerAlumnos(1)
      .then(alumno => {
        expect( alumno.id ).toBe(1);

       
    }) 
    
  });*/
});
