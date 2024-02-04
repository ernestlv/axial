import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  let mockActivateRoute = {
    snapshot: {
      queryParamMap: {
        get(param: string) {
          return '10m';
        }
      }
    }
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivateRoute },
      ]
    });
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init and transform num', () => {
    expect(component.num).toBe(10000000);
  });
});
