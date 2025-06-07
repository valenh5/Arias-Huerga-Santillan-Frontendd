import { Component } from '@angular/core';
<<<<<<< HEAD
import { RegistroComponent } from './components/registro.component';
import { FormsModule } from '@angular/forms';
=======
import { RouterModule } from '@angular/router';
>>>>>>> recContrasenia

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RegistroComponent, FormsModule],
  template: `<app-registro></app-registro>`
=======
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`
>>>>>>> recContrasenia
})
export class AppComponent {}
