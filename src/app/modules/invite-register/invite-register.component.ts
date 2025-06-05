import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Invite} from '../invite/models/invite';
import {InviteService} from '../invite/services/invite.service';
import {NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {InputMask} from 'primeng/inputmask';
import {Ripple} from 'primeng/ripple';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-invite-register',
  imports: [
    TableModule,
    Button,
    Dialog,
    ReactiveFormsModule,
    InputText,
    InputMask,
    Toast,
  ],
  templateUrl: './invite-register.component.html',
  styleUrl: './invite-register.component.css',
  providers: [MessageService]
})
export class InviteRegisterComponent implements OnInit{

  invites: Invite[] = [];
  cols!: Column[];
  showInviteForm: boolean = false;
  showRemoveDialog: boolean = false;
  inviteToRemove: Invite | undefined;

  constructor(private inviteService: InviteService, private messageService: MessageService) {

  }
  ngOnInit(): void {
    this.inviteService.getInvites().valueChanges.subscribe(result => {
      // @ts-ignore
      this.invites = result.data.invites;
    });
    this.cols = [
      { field: 'alias', header: 'Alias' },
      { field: 'fullname', header: 'Nombre' },
      { field: 'phone', header: 'Teléfono' },
      { field: 'attendance', header: 'Asistencia' },
      { field: 'guestsCount', header: 'Cantidad de invitados' },
      { field: 'comments', header: 'Comentarios' },

    ];
  }

  inviteForm = new FormGroup({
    fullname: new FormControl(''),
    alias: new FormControl(''),
    phone: new FormControl('')
  })

  submitInvite() {
    const { fullname, alias, phone } = this.inviteForm.value;
    this.inviteService.createInvite(fullname!, alias!, phone!).subscribe(result => {
      this.showInviteForm = false;
      this.showSuccess("Invitado agregado");
    })
  }

  copyInvitation(invite: Invite) {
    navigator.clipboard.writeText("https://boda.coyolicatzin.com/?invitado=" + invite.token);
    this.messageService.add({severity:'info', summary:'Copiado', detail:`Invitación de ${invite.alias} Copiada`});

  }

  openRemoveDialog(invite: Invite) {
    this.inviteToRemove = invite;
    this.showRemoveDialog = true;
  }

  removeInvite(){
    this.inviteService.deleteInvite(this.inviteToRemove!.id).subscribe(result => {
      this.showRemoveDialog = false;
      this.showSuccess("Invitado Eliminado!")
    })
  }

  closeDialog() {
    this.showInviteForm = false;
  }

  closeRemoveDialog() {
    this.inviteToRemove = undefined;
    this.showRemoveDialog = false;
  }

  showSuccess(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Listo!', detail: message });
  }

}
