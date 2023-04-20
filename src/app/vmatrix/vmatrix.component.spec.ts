import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMatrixComponent } from './vmatrix.component';

describe('VMatrixComponent', () => {
  let component: VMatrixComponent;
  let fixture: ComponentFixture<VMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
