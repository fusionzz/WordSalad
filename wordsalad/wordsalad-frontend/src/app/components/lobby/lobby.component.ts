import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lobby',
  imports: [RouterLink],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})
export class LobbyComponent {
  name: string = sessionStorage.getItem('name')!;
  unassigned = [this.name];
  team_1: string[] = []
  team_2: string[] = []

  moveToTeam1(){
    if (this.team_1.indexOf(this.name) != -1){
      return
    }
    this.unassigned.splice(this.unassigned.indexOf(this.name), 1);
    this.team_2.splice(this.team_2.indexOf(this.name), 1);
    this.team_1.push(this.name);

    //TO SERVER
    sessionStorage.setItem('team', '1');
  }

  moveToTeam2(){
    if (this.team_2.indexOf(this.name) != -1){
      return
    }
    this.unassigned.splice(this.unassigned.indexOf(this.name), 1);
    this.team_1.splice(this.team_2.indexOf(this.name), 1);
    this.team_2.push(this.name);

    //TO SERVER
    sessionStorage.setItem('team', '2');
  }
}
