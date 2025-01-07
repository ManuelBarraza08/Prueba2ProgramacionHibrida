import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-formulario-configuracion',
  templateUrl: './formulario-configuracion.component.html',
  styleUrls: ['./formulario-configuracion.component.scss'],
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule, FormsModule, IonicModule]
})
export class FormularioConfiguracionComponent {
  @Input() borrarAlInicio: boolean = false;
  @Output() borrarAlInicioChange = new EventEmitter<boolean>();

  onToggleChange() {
    this.borrarAlInicioChange.emit(this.borrarAlInicio);
  }
}

