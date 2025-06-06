import {Component, OnInit} from '@angular/core';
import {InfoItemComponent} from '../../shared/info-item/info-item.component';
import {Stay} from './stay';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-stay-list',
  imports: [
    InfoItemComponent,
    NgForOf
  ],
  templateUrl: './stay-list.component.html',
  styleUrl: './stay-list.component.css'
})
export class StayListComponent implements OnInit {

  stayList: Stay[] = [];

  ngOnInit(): void {
    this.stayList.push(
      new Stay(
        "Hotel Regente Ixtepec",
        "Nicolas Bravo esquina 16 de septiembre Estacion, 70110 Cdad. Ixtepec, Oax.",
        undefined,
        "https://maps.app.goo.gl/ViBPGf8g2o1oSBFf9",
        "Ver Mapa"),
      new Stay(
        "Hotel Manzur Ixtepec",
        "Av. 16 de Septiembre 110, Moderna, 70110 Cdad. Ixtepec, Oax.",
        undefined,
        "https://maps.app.goo.gl/B4zR3vDHuzJV3gNf6",
        "Ver Mapa")
    )
  }

}
