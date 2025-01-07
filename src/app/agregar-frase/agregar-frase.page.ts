import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormularioCitaComponent } from '../formulario-cita/formulario-cita.component';
import { ServicioFrases } from '../service/servicio-frases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-frase',
  templateUrl: './agregar-frase.page.html',
  styleUrls: ['./agregar-frase.page.scss'],
  standalone: true, // Marca la página como independiente
  imports: [CommonModule, IonicModule, FormularioCitaComponent]
})
export class AgregarFrasePage {
  constructor(
    private servicioFrases: ServicioFrases,
    private router: Router
  ) {}

  async agregarFrase(frase: { frase: string, autor: string }) {
    await this.servicioFrases.agregarFrase(frase);
    this.router.navigate(['/gestion-frases']);
  }
}


