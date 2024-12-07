import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingPlayerComponent } from './guessing-player.component';

describe('GuessingPlayerComponent', () => {
  let component: GuessingPlayerComponent;
  let fixture: ComponentFixture<GuessingPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessingPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessingPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
