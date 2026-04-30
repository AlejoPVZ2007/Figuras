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
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Component({
  selector: 'app-principal',
  imports: [
    RouterModule, 
    Navbar, 
    Footer, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatGridListModule, 
    MatTabsModule, 
    DatePipe],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal implements OnInit{
  
  figuraPorId: any[] = [];

  constructor(
    private figuraService: Figura,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.figuraService.getFiguraPorId().subscribe(data => {
      console.log('Data recibida:', data); // ← agrega esto
      this.figuraPorId = data;
      this.cdr.detectChanges();
    });
  }
}
