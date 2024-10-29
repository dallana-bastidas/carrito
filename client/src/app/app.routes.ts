import { Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
  { path: 'articulos', component: ArticulosComponent },
  { path: 'carrito', component: CarritoComponent },
];
