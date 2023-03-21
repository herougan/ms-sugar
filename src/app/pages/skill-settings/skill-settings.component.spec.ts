import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSettingsComponent } from './skill-settings.component';

describe('SkillSettingsComponent', () => {
  let component: SkillSettingsComponent;
  let fixture: ComponentFixture<SkillSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
