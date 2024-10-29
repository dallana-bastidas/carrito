import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css',
})
export class ArticulosComponent {
  items = [
    { id: 0, nombre: 'bici', precio: 3000 },
    { id: 1, nombre: 'TV', precio: 2500 },
    { id: 2, nombre: 'Libro', precio: 320 },
  ];

  @Output() agregarAlCarrito = new EventEmitter<any>();

  agregar(item: any) {
    this.agregarAlCarrito;
  }
}
