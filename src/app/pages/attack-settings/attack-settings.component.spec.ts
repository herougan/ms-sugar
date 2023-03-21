import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackSettingsComponent } from './attack-settings.component';

describe('AttackSettingsComponent', () => {
  let component: AttackSettingsComponent;
  let fixture: ComponentFixture<AttackSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
