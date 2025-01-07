import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-cita',
  templateUrl: './mostrar-cita.component.html',
  styleUrls: ['./mostrar-cita.component.scss'],
  standalone: true,
})
export class MostrarCitaComponent {
  @Input() frase: any;
}

