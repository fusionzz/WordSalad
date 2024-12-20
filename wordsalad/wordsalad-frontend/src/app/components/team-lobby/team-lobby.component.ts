import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-lobby',
  imports: [RouterLink],
  templateUrl: './team-lobby.component.html',
  styleUrl: './team-lobby.component.css'
})
export class TeamLobbyComponent {

  name = sessionStorage.getItem('name');
  team = sessionStorage.getItem('team');

  players: string[] = [this.name!];
  
}
