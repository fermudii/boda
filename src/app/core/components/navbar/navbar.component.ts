import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {scrollToElementById} from '../../../shared/constants';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        command: () => scrollToElementById('inicio', -60)
      },
      {
        label: 'Itinerario',
        command: () => scrollToElementById('itinerario', -60)
      },
      {
        label: 'Asistencia',
        command: () => scrollToElementById('asistencia', -60)
      },
      {
        label: 'Transporte',
        command: () => scrollToElementById('transporte', -60)
      },
      {
        label: 'Hoteles',
        command: () => scrollToElementById('hoteles', -60)
      }
    ]
  }

}
