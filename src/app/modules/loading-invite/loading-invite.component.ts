import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InviteService} from '../invite/services/invite.service';
import {NgIf} from '@angular/common';
import {Invite} from '../invite/models/invite';

@Component({
  selector: 'app-loading-invite',
  imports: [
    NgIf
  ],
  templateUrl: './loading-invite.component.html',
  styleUrl: './loading-invite.component.css'
})
export class LoadingInviteComponent implements OnInit {

  token: string | null = null;
  loading: boolean = true;
  showNotFoundMessage: boolean = false;

  @Output() inviteFound = new EventEmitter<Invite>();

   constructor(
     private route: ActivatedRoute,
     private router: Router,
     private inviteService: InviteService) {}

  ngOnInit() {
    document.body.classList.toggle('overflow-hidden', this.loading);
    this.checkToken();
  }

  checkToken() {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('invitado');
      if (this.token) {
        this.inviteService.getInviteByToken(this.token)
          .subscribe({
            next: ({data}) => {
              // @ts-ignore
              this.inviteFound.emit(data.inviteByToken);
              this.loading = false;
              document.body.classList.toggle('overflow-hidden', this.loading);
              console.log(data);

            },
            error: err => {
              console.log(err);
              this.showNotFoundMessage = true;
            }
          })
      } else {
        this.router.navigate(['/unauthorized']);
      }
    })
  }
}
