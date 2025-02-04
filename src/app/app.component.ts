import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'editortexto';

  isTextareaEnabled: boolean = false;
  blogText: string = "";
  footerDate: number = new Date().getFullYear();

  //Valores seleccionados
  selectedFont: string = "Arial";
  selectedSize: string = "12";
  selectedColor: string = "black";
  selectedLineHeight: string = "1.5";

  //Habilitar textarea
  enableTextarea(): void {
    this.isTextareaEnabled = true;
  }

  //Limpiar textarea

  clearTextarea(): void {
    this.blogText = "";
  }

}// CIERRE DE LA CLASE AppComponent
