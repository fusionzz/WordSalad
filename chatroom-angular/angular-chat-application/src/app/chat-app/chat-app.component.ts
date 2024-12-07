import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { ChatMessage } from '../../models/chat-message';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css'],
  imports: [FormsModule, NgFor, RouterLink, RouterOutlet]
})
export class ChatAppComponent {

  constructor(private messageService: MessagesService) {}

  model = new ChatMessage("");
  
  messageList: string[] = [];

  sendMessage(): void {
    console.log(this.model.msg)
    this.messageService.sendMessage(this.model.msg)
    this.model.msg = "";
  };

ngOnInit(): void {
  this.messageService.getMessage().subscribe((message:string)=> {
    this.messageList.push(message);
  })
}

  submitted = false;

  onSubmit() { 
    this.sendMessage()
    this.submitted = true;
    
   }
}