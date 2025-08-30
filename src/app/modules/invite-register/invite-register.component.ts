import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Invite} from '../invite/models/invite';
import {InviteService} from '../invite/services/invite.service';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {InputMask} from 'primeng/inputmask';
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
  showEditInviteForm: boolean = false;
  showRemoveDialog: boolean = false;
  inviteToRemove: Invite | undefined;
  inviteIdToEdit: number | undefined;

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

  editInviteForm = new FormGroup({
    fullname: new FormControl(''),
    alias: new FormControl(''),
    phone: new FormControl(''),
    comments: new FormControl(''),
    attendance: new FormControl(null as boolean | null),
    guestsCount: new FormControl(null as number | null),
  })

  submitInvite() {
    const { fullname, alias, phone } = this.inviteForm.value;
    this.inviteService.createInvite(fullname!, alias!, phone ?? '').subscribe(result  => {
      this.showInviteForm = false;
      this.showSuccess("Invitado agregado");
      // @ts-ignore
      this.copyInvitation(result.data.createInvite)
      this.inviteForm.reset();
    })
  }

  submitEditedInvite() {
    this.inviteService.updateInvite(this.inviteIdToEdit! ,this.editInviteForm.getRawValue() as Invite).subscribe(result => {
      this.showEditInviteForm = false;
      this.showSuccess("Invitado editado");
      // @ts-ignore
      this.copyInvitation(result.data.updateInvite)
      this.inviteForm.reset();
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

  openEditDialog(invite: Invite) {
    this.inviteIdToEdit = invite.id;
    this.editInviteForm.patchValue(invite);
    this.showEditInviteForm = true;
  }

  removeInvite(){
    this.inviteService.deleteInvite(this.inviteToRemove!.id).subscribe( ()=> {
      this.showRemoveDialog = false;
      this.showSuccess("Invitado Eliminado!")
    })
  }

  closeDialog() {
    this.showInviteForm = false;
  }

  closeEditDialog() {
    this.showEditInviteForm = false;
  }

  closeRemoveDialog() {
    this.inviteToRemove = undefined;
    this.showRemoveDialog = false;
  }

  showSuccess(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Listo!', detail: message });
  }

  getConfirmedInvitesCount(){
    return this.invites.filter(invite => invite.attendance).length
  }

  getDeclinedInvitesCount(){
    return this.invites.filter(invite => invite.attendance != null && !invite.attendance).length
  }

  getUnansweredInvitesCount(){
    return this.invites.filter(invite => invite.attendance == null).length
  }

  getTotalInvites(){
    return this.invites
      .filter(invite => invite.attendance)
      .reduce((acc, invite) => acc + invite.guestsCount, 0)
  }

}
