import { Component, OnInit } from '@angular/core';
import { Observable, of, timer, interval } from 'rxjs';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  obs: Observable<number>;

  val: number;

  time: Date;

  minutes: number;

  seconds: number;

  hours: number;

  day: number;

  month: number;

  year: number;

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
      this.obs = interval(1000);
      this.minutes = this.time.getMinutes();
      this.seconds = this.time.getSeconds();
      this.hours = this.time.getHours();
      this.day = this.time.getDate();
      this.month = this.time.getMonth()+1;
      this.year = this.time.getFullYear();

      const sub = this.obs.subscribe(
          s => {
              this.seconds++;
              if (this.seconds === 60) {
                  this.seconds = 0;
                  this.minutes++;
              }
              if (this.minutes === 60) {
                  this.minutes = 0;
                  this.hours++;
              }
              if (this.hours === 24) {
                  this.hours = 0;
                  const d = new Date();
                  this.day = d.getDate();
                  this.month = d.getMonth()+1;
                  this.year = d.getFullYear();
              }
          }
      )
  }
}


