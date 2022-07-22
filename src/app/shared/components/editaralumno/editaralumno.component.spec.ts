import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MockModule, MockService } from 'ng-mocks';
import { MaterialModule } from 'src/app/modules/material/material.module';

import { EditaralumnoComponent } from './editaralumno.component';

fdescribe('EditaralumnoComponent', () => {
  let component: EditaralumnoComponent;
  let fixture: ComponentFixture<EditaralumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaralumnoComponent, MatDialogRef ],
      imports: [
        MockModule(MatDialogModule),
        MockModule(MaterialModule),
        
        
        /* MockModule(HttpClientModule), */
      ],
      providers: [
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
