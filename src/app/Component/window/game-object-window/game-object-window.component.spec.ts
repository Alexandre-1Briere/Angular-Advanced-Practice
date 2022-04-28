import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameObjectWindowComponent } from './game-object-window.component';

describe('GameObjectWindowComponent', () => {
  let component: GameObjectWindowComponent;
  let fixture: ComponentFixture<GameObjectWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameObjectWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameObjectWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
