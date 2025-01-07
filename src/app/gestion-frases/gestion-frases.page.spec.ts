import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionFrasesPage } from './gestion-frases.page';

describe('GestionFrasesPage', () => {
  let component: GestionFrasesPage;
  let fixture: ComponentFixture<GestionFrasesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFrasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
