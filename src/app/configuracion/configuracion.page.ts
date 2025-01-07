import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormularioConfiguracionComponent } from '../formulario-configuracion/formulario-configuracion.component';
import { ServicioConfiguracion } from '../service/servicio-configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true, // Marca la página como independiente
  imports: [CommonModule, IonicModule, FormularioConfiguracionComponent]
})
export class ConfiguracionPage implements OnInit {
  borrarAlInicio: boolean = false; // Inicialización directa

  constructor(private servicioConfiguracion: ServicioConfiguracion) {}

  ngOnInit() {
    this.cargarConfiguracion();
  }

  async cargarConfiguracion() {
    this.borrarAlInicio = await this.servicioConfiguracion.obtenerBorrarAlInicio();
  }

  async guardarConfiguracion() {
    await this.servicioConfiguracion.establecerBorrarAlInicio(this.borrarAlInicio);
  }
}




