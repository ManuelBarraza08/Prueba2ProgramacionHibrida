import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ServicioSQLite } from './servicio-sqlite.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioFrases {
  frases = [
    { frase: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', autor: 'John Lennon' },
    // Otras frases aquí...
  ];

  constructor(private servicioSQLite: ServicioSQLite) {}

  async obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.frases.length);
    return this.frases[indiceAleatorio];
  }

  async agregarFrase(frase: { frase: string, autor: string }) {
    this.frases.push(frase);
    await this.servicioSQLite.guardarFrase(frase);
  }

  async eliminarFrase(indice: number) {
    this.frases.splice(indice, 1);
    await this.servicioSQLite.eliminarFrase(indice);
  }

  async cargarFrases() {
    const frasesGuardadas = await this.servicioSQLite.obtenerFrases();
    if (frasesGuardadas) {
      this.frases = frasesGuardadas;
    }
  }
}


