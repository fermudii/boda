import {Component, OnDestroy, OnInit} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {PapelPicadoLineComponent} from '../../../shared/papel-picado-line/papel-picado-line.component';
import {FlorLineComponent} from '../../../shared/flor-line/flor-line.component';
import {RsvpFormComponent} from '../../../modules/rsvp-form/rsvp-form.component';

@Component({
  selector: 'app-main',
  imports: [
    FooterComponent,
    NavbarComponent,
    PapelPicadoLineComponent,
    FlorLineComponent,
    RsvpFormComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy {
  targetDate = new Date('2025-12-27T00:00:00');
  intervalId: any;

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      // Si ya pasó
      clearInterval(this.intervalId);
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
