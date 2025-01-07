import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MostrarCitaComponent } from '../mostrar-cita/mostrar-cita.component';
import { ServicioFrases } from '../service/servicio-frases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, // Marca la página como independiente
  imports: [CommonModule, IonicModule, MostrarCitaComponent]
})
export class HomePage implements OnInit {
  fraseAleatoria: any;

  constructor(private servicioFrases: ServicioFrases) {}

  ngOnInit() {
    this.cargarFraseAleatoria();
  }

  async cargarFraseAleatoria() {
    this.fraseAleatoria = await this.servicioFrases.obtenerFraseAleatoria();
  }
}




