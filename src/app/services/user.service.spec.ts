import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { Iuser } from '../interfaces/user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MockModule } from 'ng-mocks';

describe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;
  const mockResp: Iuser [] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(HttpClientModule),
        HttpClientTestingModule
      ],

      providers: []
    });
    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
