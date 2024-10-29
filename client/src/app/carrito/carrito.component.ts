import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  carrito = [
    {nombre: 'portatil',precio:2000,cantidad:1}
  ];

}
