import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from "../footer/footer";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { Figura } from '../services/figura';
import { MatColumnDef } from "@angular/material/table";


@Component({
  selector: 'app-principal',
  imports: [RouterModule, Navbar, Footer, MatCardModule, MatButtonModule, MatIconModule, Footer, MatGridListModule, MatTabsModule, MatColumnDef],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal implements OnInit{
  
  figuraPorId: any[] = [];
  columnasTabla = ['nombre', 'tamanio', 'serie', 'fecha', 'imagen'];

  constructor(private figuraService: Figura, private cdr: ChangeDetectorRef) {}

  ngOnInit(){
    this.figuraService.getFiguraPorId().subscribe(data => {
      this.figuraPorId = data;
      this.cdr.detectChanges();
    });
  }

}
