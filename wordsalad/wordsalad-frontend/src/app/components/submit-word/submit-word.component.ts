import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-submit-word',
  imports: [RouterLink, FormsModule],
  templateUrl: './submit-word.component.html',
  styleUrl: './submit-word.component.css'
})
export class SubmitWordComponent {

  constructor(){

  }

  numWords = 5;

  words: string[] = []
  wordField = '';

  addWord(word:string){
    this.words.push(word);
    this.wordField = '';
  }

  deleteWord(index:number){
    this.words.splice(index, 1);
  }
}
