import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class ServicioSQLite {
  private db: SQLiteDBConnection;

  constructor() {
    this.inicializarBaseDeDatos();
  }

  // Inicializa la base de datos y crea la tabla si no existe
  private async inicializarBaseDeDatos() {
    try {
      this.db = (await CapacitorSQLite.createConnection({
        database: 'data.db',
        version: 1,
        encrypted: false,
        mode: 'no-encryption'
      })).sqlite;

      await this.db.open();

      const createTable = `
        CREATE TABLE IF NOT EXISTS frases (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          frase TEXT NOT NULL,
          autor TEXT NOT NULL
        );
      `;

      await this.db.execute(createTable);
    } catch (e) {
      console.error('Error al inicializar la base de datos: ', e);
    }
  }

  // Guarda una nueva frase en la base de datos
  async guardarFrase(frase: { frase: string, autor: string }) {
    try {
      const sql = `INSERT INTO frases (frase, autor) VALUES (?, ?)`;
      const params = [frase.frase, frase.autor];
      await this.db.run(sql, params);
    } catch (e) {
      console.error('Error al guardar la frase: ', e);
    }
  }

  // Elimina una frase de la base de datos por su ID
  async eliminarFrase(id: number) {
    try {
      const sql = `DELETE FROM frases WHERE id = ?`;
      const params = [id];
      await this.db.run(sql, params);
    } catch (e) {
      console.error('Error al eliminar la frase: ', e);
    }
  }

  // Obtiene todas las frases de la base de datos
  async obtenerFrases() {
    try {
      const sql = `SELECT * FROM frases`;
      const res = await this.db.query(sql);
      return res.values;
    } catch (e) {
      console.error('Error al obtener las frases: ', e);
      return [];
    }
  }

  // Actualiza una frase existente en la base de datos
  async actualizarFrase(id: number, frase: { frase: string, autor: string }) {
    try {
      const sql = `UPDATE frases SET frase = ?, autor = ? WHERE id = ?`;
      const params = [frase.frase, frase.autor, id];
      await this.db.run(sql, params);
    } catch (e) {
      console.error('Error al actualizar la frase: ', e);
    }
  }
}
