import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { ChooseLetterComponent } from './components/choose-letter/choose-letter.component';
import { SubmitWordComponent } from './components/submit-word/submit-word.component';
import { TeamLobbyComponent } from './components/team-lobby/team-lobby.component';
import { ChosenPlayerComponent } from './components/chosen-player/chosen-player.component';
import { GuessingPlayerComponent } from './components/guessing-player/guessing-player.component';
import { EndScreenComponent } from './components/end-screen/end-screen.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        title: "Home"
    },
    {
        path: 'wrapper',
        component: WrapperComponent,
        title: ""
    },
    {
        path: 'lobby',
        component: LobbyComponent,
        title: "Lobby"
    },
    {
        path: 'choose-letter',
        component: ChooseLetterComponent,
        title: "Choosing a letter!"
    },
    {
        path: 'submit-word',
        component: SubmitWordComponent,
        title: "Submitting words..."
    },
    {
        path: 'team-lobby',
        component: TeamLobbyComponent,
        title: "Team Lobby"
    },
    {
        path: 'chosen-player',
        component: ChosenPlayerComponent,
        title: "You are the chosen player!"
    },
    {
        path: 'guessing-player',
        component: GuessingPlayerComponent,
        title: "You are guessing/waiting!"
    },
    {
        path: 'end-screen',
        component: EndScreenComponent,
        title: "End of the game!"
    },
];
