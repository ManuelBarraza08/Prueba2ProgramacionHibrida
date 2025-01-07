import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { GestionFrasesPage } from './gestion-frases/gestion-frases.page';
import { ConfiguracionPage } from './configuracion/configuracion.page';
import { AgregarFrasePage } from './agregar-frase/agregar-frase.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'gestion-frases', component: GestionFrasesPage },
  { path: 'configuracion', component: ConfiguracionPage },
  { path: 'agregar-frase', component: AgregarFrasePage }
];
