import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-cover',
  imports: [],
  templateUrl: './main-cover.component.html',
  styleUrl: './main-cover.component.css'
})
export class MainCoverComponent implements OnInit, OnDestroy {
  targetDate = new Date('2025-12-27T00:00:00');
  intervalId: any;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit(): void {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
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

  createCalendar(){
    const title = encodeURIComponent("Boda de Coyo y Fer");
    const description = encodeURIComponent("Acompáñanos a celebrar nuestra boda");
    const address = encodeURIComponent("San Pedro Comitancillo, Oaxaca");
    const startDate = this.toGoogleDate(new Date('2025-12-27T11:00:00'));
    const endDate = this.toGoogleDate(new Date('2025-12-27T23:00:00'));
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${description}&location=${address}`;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private toGoogleDate(date: Date): string {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
  }

}
