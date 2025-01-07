import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.scss'],
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule]
})
export class FormularioCitaComponent {
  fraseForm: FormGroup;
  @Output() submitForm = new EventEmitter<{ frase: string, autor: string }>();

  constructor(private fb: FormBuilder) {
    this.fraseForm = this.fb.group({
      frase: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.fraseForm.valid) {
      this.submitForm.emit(this.fraseForm.value); // Emitir el evento con el valor del formulario
    }
  }
}


