import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerAbilityComponent } from './inner-ability.component';

describe('InnerAbilityComponent', () => {
  let component: InnerAbilityComponent;
  let fixture: ComponentFixture<InnerAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerAbilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
