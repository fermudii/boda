import {Component, OnInit} from '@angular/core';
import {Transport} from './transport';
import {NgForOf} from '@angular/common';
import {InfoItemComponent} from '../../shared/info-item/info-item.component';

@Component({
  selector: 'app-transport',
  imports: [
    NgForOf,
    InfoItemComponent
  ],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.css'
})
export class TransportComponent implements OnInit {

  transportList: Transport[] = [];

  ngOnInit(): void {
        this.transportList.push(
          new Transport(
            "Conextla",
            "Xalapa-Juchitán",
            "Corrida directa, económica y cómoda",
            "https://conextla.com/",
            "Ir al sitio"
          ),
          new Transport(
            "ADO",
            "Xalapa-Veracruz, Veracruz-Juchitán",
            "Opción con transbordo",
            "https://www.ado.com.mx/",
            "Ir al sitio"
          ),

        );
    }

}
