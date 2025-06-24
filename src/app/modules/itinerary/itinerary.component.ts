import {Component, OnInit} from '@angular/core';
import {InfoItemComponent} from '../../shared/info-item/info-item.component';
import {Itinerary} from './itinerary';
import {NgForOf} from '@angular/common';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'app-itinerary',
  imports: [
    InfoItemComponent,
    NgForOf,
    Dialog
  ],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.css'
})
export class ItineraryComponent implements  OnInit {

  itineraryList: Itinerary[] = [];
  showProgramaDialog: boolean = false;
  casaGrandeAddress: string = "https://maps.app.goo.gl/7P7d7vRQKPQ73oic8";
  iglesiaAddress: string = "https://maps.app.goo.gl/d4dRKjHZ5hJPQxE3A";

  ngOnInit(): void {
  this.itineraryList.push(
    new Itinerary(
      "Dejada de la luz",
      "Casa Grande",
      "Viernes 26 de Diciembre 06:00 p.m.",
      this.casaGrandeAddress,
      "Ver Mapa",
      "La Familia del novio inicia la party"
    ),
    new Itinerary(
      "Salida a la Misa",
      "Casa Grande",
      "Sábado 27 de Diciembre 10:30 a.m."
    ),
    new Itinerary(
      "Misa",
      "Iglesia del Pueblo",
      "Sábado 27 de Diciembre 11:00 a.m.",
      this.iglesiaAddress,
      "Ver Mapa"
    ),
    new Itinerary(
      "Recepción",
      "Casa Grande",
      "Sábado 27 de Diciembre 1:00 p.m.",
      this.casaGrandeAddress,
      "Ver Mapa"
    ),
    new Itinerary(
      "Comida",
      "Casa Grande",
      "Sábado 27 de Diciembre 2:00 p.m."
    ),
    new Itinerary(
      "Programa",
      "Casa Grande",
      "Sábado 27 de Diciembre 3:00 p.m.",
      "dialog",
      "Ver Más"
    ),
    new Itinerary(
      "Lavada de Olla",
      "Casa Grande",
      "Domingo 28 de Diciembre 2:00 p.m.",
      undefined,
      undefined,
      "Sigue la party"
    ),
  )
  }

  onOpenDialog(itinerary: Itinerary) {
    if (itinerary.header == "Programa") {
      this.showProgramaDialog = true;
    }
  }

}
