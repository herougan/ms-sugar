import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatComponent } from './main-stat.component';

describe('MainStatComponent', () => {
  let component: MainStatComponent;
  let fixture: ComponentFixture<MainStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
