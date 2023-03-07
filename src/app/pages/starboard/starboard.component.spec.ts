import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarboardComponent } from './starboard.component';

describe('StarboardComponent', () => {
  let component: StarboardComponent;
  let fixture: ComponentFixture<StarboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
