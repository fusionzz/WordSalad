import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenPlayerComponent } from './chosen-player.component';

describe('ChosenPlayerComponent', () => {
  let component: ChosenPlayerComponent;
  let fixture: ComponentFixture<ChosenPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChosenPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
