import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './components/registro.component';

@NgModule({
  declarations: [RegistroComponent], 
  imports: [BrowserModule, AppRoutingModule, FormsModule], 
  providers: [],
  bootstrap: [RegistroComponent] 
})
export class AppModule {}
