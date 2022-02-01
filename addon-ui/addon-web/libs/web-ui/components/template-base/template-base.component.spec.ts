import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBaseComponent } from './template-base.component';

describe('TemplateBaseComponent', () => {
  let component: TemplateBaseComponent;
  let fixture: ComponentFixture<TemplateBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
