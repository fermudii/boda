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

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
