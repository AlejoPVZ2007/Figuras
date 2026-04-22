import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from "../footer/footer";
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-principal',
  imports: [RouterModule, Navbar, Footer, MatCardModule, MatButtonModule, MatIconModule, Footer, MatGridListModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
  
}
