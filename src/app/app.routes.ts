import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
import { PrendasComponent } from './components/inicio.component';
import { RegistroComponent } from './components/registro.component';
import { ResetComponent } from './components/reset.component';

export const routes: Routes = [
  { path: '', component: PrendasComponent },
  { path: 'sesion', component: RegistroComponent },
  { path: 'usuarios/resetear-contrasenia/:token', component: ResetComponent }
];
>>>>>>> recContrasenia
