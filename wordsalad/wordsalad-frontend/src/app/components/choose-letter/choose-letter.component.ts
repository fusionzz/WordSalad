import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choose-letter',
  imports: [RouterLink],
  templateUrl: './choose-letter.component.html',
  styleUrl: './choose-letter.component.css'
})
export class ChooseLetterComponent {

  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  chosen = '';

  ngOnInit(){
    this.chosen = this.letters[Math.floor(Math.random()*26)]
  }

}
