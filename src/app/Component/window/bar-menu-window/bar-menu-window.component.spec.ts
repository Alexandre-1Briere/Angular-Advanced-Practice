import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMenuWindowComponent } from './bar-menu-window.component';

describe('BarMenuWindowComponent', () => {
  let component: BarMenuWindowComponent;
  let fixture: ComponentFixture<BarMenuWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarMenuWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarMenuWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
