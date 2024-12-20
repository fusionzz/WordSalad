import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  name: string = '';
  ngDoCheck(){
    this.name = sessionStorage.getItem('name') || '';
  }

  removeName(){
    sessionStorage.clear()
  }

}
