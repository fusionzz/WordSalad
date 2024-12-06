import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatAppComponent } from './chat-app/chat-app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-chat-application';
}
