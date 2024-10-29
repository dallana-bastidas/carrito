import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  carrito = [
    {nombre: 'portatil',precio:2000,cantidad:1}
  ];

}
