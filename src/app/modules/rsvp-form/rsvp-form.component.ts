import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {RadioButton} from 'primeng/radiobutton';
import {InputMask} from 'primeng/inputmask';
import {InputNumber} from 'primeng/inputnumber';
import {Button} from 'primeng/button';
import {Textarea} from 'primeng/textarea';
import {FloatLabel} from 'primeng/floatlabel';
import {NgIf} from '@angular/common';
import {Invite} from '../invite/models/invite';
import {InviteService} from '../invite/services/invite.service';

@Component({
  selector: 'app-rsvp-form',
  imports: [
    FormsModule,
    InputText,
    RadioButton,
    InputMask,
    InputNumber,
    Button,
    ReactiveFormsModule,
    Textarea,
    FloatLabel,
    NgIf
  ],
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.css'
})
export class RsvpFormComponent{

  constructor(private  inviteService: InviteService) {
  }


  @Input()
  set invite(value: Invite | undefined) {
    if(value) {
      this.isSubmitted = value.attendance !== null;
      this.inviteId = value.id;
      this.attendanceForm.patchValue({
        fullname: value.fullname,
        alias: value.alias,
        attendance: value.attendance,
        guestsCount: value.guestsCount,
        comments: value.comments,
        phone: value.phone
      })
    }
  }
  inviteId: number | undefined;
  isSubmitted = false;
  showConfirmationMsg = true;

  attendanceForm = new FormGroup({
    fullname: new FormControl(''),
    alias: new FormControl(''),
    attendance: new FormControl(null as boolean | null),
    guestsCount: new FormControl(1),
    comments: new FormControl(''),
    phone: new FormControl('')
  })

  submitRSVP() {
    this.inviteService.updateInvite(
      this.inviteId as number, this.attendanceForm.getRawValue() as Invite)
      .subscribe(result => {
        this.isSubmitted = true;
        this.showConfirmationMsg = true;
      })
  }

  hideConfirmationMsg() {
    this.showConfirmationMsg = false;
  }



}
