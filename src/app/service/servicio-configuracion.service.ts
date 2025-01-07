import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ServicioConfiguracion {
  async obtenerBorrarAlInicio(): Promise<boolean> {
    const { value } = await Preferences.get({ key: 'borrarAlInicio' });
    return value === 'true';
  }

  async establecerBorrarAlInicio(valor: boolean) {
    await Preferences.set({ key: 'borrarAlInicio', value: valor.toString() });
  }
}

