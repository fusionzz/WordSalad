import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-submit-word',
  imports: [RouterLink, FormsModule, Router],
  templateUrl: './submit-word.component.html',
  styleUrl: './submit-word.component.css'
})
export class SubmitWordComponent {

  constructor(private router: Router){

  }

  words: string[] = []
  wordField = '';

  addWord(word:string){
    this.words.push(word);
    this.wordField = '';

    if (this.words.length == 5){
      this.router.navigate(["/team-lobby"]);
    }
  }
}
