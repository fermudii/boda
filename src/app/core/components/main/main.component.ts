import {Component, OnDestroy, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {PapelPicadoLineComponent} from '../../../shared/papel-picado-line/papel-picado-line.component';
import {FlorLineComponent} from '../../../shared/flor-line/flor-line.component';
import {RsvpFormComponent} from '../../../modules/rsvp-form/rsvp-form.component';
import {Invite} from '../../../modules/invite/models/invite';
import {LoadingInviteComponent} from '../../../modules/loading-invite/loading-invite.component';
import {MainCoverComponent} from '../../../modules/main-cover/main-cover.component';
import {WelcomeComponent} from '../../../modules/welcome/welcome.component';
import {ItineraryComponent} from '../../../modules/itinerary/itinerary.component';
import {TransportComponent} from '../../../modules/transport/transport.component';
import {StayListComponent} from '../../../modules/stay-list/stay-list.component';
import {DressCodeComponent} from '../../../modules/dress-code/dress-code.component';
import {GifDetailsComponent} from '../../../modules/gif-details/gif-details.component';

@Component({
  selector: 'app-main',
  imports: [
    FooterComponent,
    NavbarComponent,
    PapelPicadoLineComponent,
    FlorLineComponent,
    RsvpFormComponent,
    LoadingInviteComponent,
    MainCoverComponent,
    WelcomeComponent,
    ItineraryComponent,
    TransportComponent,
    StayListComponent,
    DressCodeComponent,
    GifDetailsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent{
  invite: Invite | undefined;
  ferLine: string = "fer_poh_transparent.webp";
  coliLine: string = "coli_wakis_transparent.webp";



  onUserFound(invite: Invite | undefined) {
    this.invite = invite;
  }







}
