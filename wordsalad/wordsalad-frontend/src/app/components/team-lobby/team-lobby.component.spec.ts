import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLobbyComponent } from './team-lobby.component';

describe('TeamLobbyComponent', () => {
  let component: TeamLobbyComponent;
  let fixture: ComponentFixture<TeamLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLobbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
