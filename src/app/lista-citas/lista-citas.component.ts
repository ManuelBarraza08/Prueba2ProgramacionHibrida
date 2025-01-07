import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonList } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss'],
  standalone: true,
})
export class ListaCitasComponent {
  @Input() frases: any[];
  @Output() eliminarFrase = new EventEmitter<number>();

  onEliminarFrase(indice: number) {
    this.eliminarFrase.emit(indice);
  }
}

