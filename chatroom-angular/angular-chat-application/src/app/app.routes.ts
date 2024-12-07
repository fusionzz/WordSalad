import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatAppComponent } from './chat-app/chat-app.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home"
    },
    {
        path: 'chat',
        component: ChatAppComponent,
        title: "Chat Room"
    }
];
