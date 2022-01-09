import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeturlComponent } from './geturl.component';

describe('GeturlComponent', () => {
  let component: GeturlComponent;
  let fixture: ComponentFixture<GeturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeturlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
