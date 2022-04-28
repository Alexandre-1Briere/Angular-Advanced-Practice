import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWindowComponent } from './component-window.component';

describe('ComponentWindowComponent', () => {
  let component: ComponentWindowComponent;
  let fixture: ComponentFixture<ComponentWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
