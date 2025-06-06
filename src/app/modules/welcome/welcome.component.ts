import {Component, Input} from '@angular/core';
import {Invite} from "../invite/models/invite";

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  @Input() invite: Invite | undefined;
}
