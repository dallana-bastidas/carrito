import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticulosComponent } from "./articulos/articulos.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticulosComponent, CarritoComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
