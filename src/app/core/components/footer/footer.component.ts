import { Component } from '@angular/core';
import {scrollToElementById} from '../../../shared/constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    scrollToElementById(id, -60);
  }
}
