import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {RadioButton} from 'primeng/radiobutton';
import {InputMask} from 'primeng/inputmask';
import {InputNumber} from 'primeng/inputnumber';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-rsvp-form',
  imports: [
    FormsModule,
    InputText,
    RadioButton,
    InputMask,
    InputNumber,
    Button
  ],
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.css'
})
export class RsvpFormComponent {

  name: string = '';
  attendance: boolean | undefined = undefined;
  guessCount: number = 1;
  comment: string = '';
  phone: string = '';

  submitRSVP() {
    //TODO save rsvp
  }

}
