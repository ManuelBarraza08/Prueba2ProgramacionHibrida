import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListaCitasComponent } from '../lista-citas/lista-citas.component';
import { ServicioFrases } from '../service/servicio-frases.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestion-frases',
  templateUrl: './gestion-frases.page.html',
  styleUrls: ['./gestion-frases.page.scss'],
  standalone: true, // Marca la página como independiente
  imports: [CommonModule, IonicModule, ListaCitasComponent, RouterModule]
})
export class GestionFrasesPage implements OnInit {
  frases: any[] = []; // Inicialización directa

  constructor(private servicioFrases: ServicioFrases) {}

  ngOnInit() {
    this.cargarFrases();
  }

  async cargarFrases() {
    await this.servicioFrases.cargarFrases();
    this.frases = this.servicioFrases.frases;
  }

  async eliminarFrase(indice: number) {
    await this.servicioFrases.eliminarFrase(indice);
    this.cargarFrases();
  }
}




