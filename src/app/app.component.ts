import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent {
  title = 'AM';
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['nombre', 'cargo', 'local', 'correo','telefono'];
  expandedElement: PeriodicElement | null | undefined;
}
export interface PeriodicElement {
  nombre: string;
  cargo: string;
  correo: string;
  local: string;
  telefono: string;

  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    nombre: 'Alin Piero',
    cargo: 'Desarrollo',
    local: 'Brillantes',
    correo: 'programador@tecnimotors.com',
    telefono:'946327301',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    nombre: 'Alonso',
    cargo: 'Practicante',
    local: 'Canta',
    correo: 'practicanteprogramador@gmail.com',
    telefono:'946327301',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },

];


