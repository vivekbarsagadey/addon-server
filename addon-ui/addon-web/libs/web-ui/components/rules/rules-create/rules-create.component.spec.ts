import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCreateComponent } from './rules-create.component';

describe('RulesCreateComponent', () => {
  let component: RulesCreateComponent;
  let fixture: ComponentFixture<RulesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
