import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NgIf } from "@angular/common";
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Footer } from "../footer/footer";
import { Figura } from '../services/figura';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    Footer,
    NgIf, Footer],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class Gestion implements OnInit{
  columnas = ['nombre', 'tamaño', 'serie', 'fecha', 'imagen'];
  foods: Food[] = [
    {value: 'dragonball', viewValue: 'Dragon Ball'},
    {value: 'jujutsu', viewValue: 'Jujutsu Kaisen'},
    {value: 'demonslayer', viewValue: 'Demon Slayer'},
    {value: 'mha', viewValue: 'My Hero Academia'},
  ];
  
  figuras: any[] = [];
  columnasTabla = ['nombre', 'tamanio', 'serie', 'fecha', 'imagen'];

  constructor(private figuraService: Figura, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.figuraService.getFiguras().subscribe(data => {
      this.figuras = data;
      this.cdr.detectChanges();
    });
  }

  imagenPreview: string | null = null;
  imagenArchivo: File | null = null;

  onImagenSeleccionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.imagenArchivo = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result as string;
      };
      reader.readAsDataURL(this.imagenArchivo);
    }
  }

  eliminarImagen() {
    this.imagenPreview = null;
    this.imagenArchivo = null;
  }
}
