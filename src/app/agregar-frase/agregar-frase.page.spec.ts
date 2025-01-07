import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarFrasePage } from './agregar-frase.page';

describe('AgregarFrasePage', () => {
  let component: AgregarFrasePage;
  let fixture: ComponentFixture<AgregarFrasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFrasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
