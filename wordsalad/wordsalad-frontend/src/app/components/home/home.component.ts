import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  roomForm = new FormGroup({
    name: new FormControl('', Validators.required),
    existingRoomCode: new FormControl(''),
  });

  createNewRoom(){
    //TO SERVER
    sessionStorage.setItem('name', this.roomForm.value.name!);
  }

  joinExistingRoom(){
    //TO SERVER
    sessionStorage.setItem('name', this.roomForm.value.name!);
  }

}
