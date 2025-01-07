import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule, IonicModule, RouterModule]
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Gestionar Frases', url: '/gestion-frases', icon: 'list' },
    { title: 'Configuración', url: '/configuracion', icon: 'settings' }
  ];

  constructor() {}
}


