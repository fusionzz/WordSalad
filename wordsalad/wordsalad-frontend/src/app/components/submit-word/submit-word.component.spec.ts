import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitWordComponent } from './submit-word.component';

describe('SubmitWordComponent', () => {
  let component: SubmitWordComponent;
  let fixture: ComponentFixture<SubmitWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
