import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-principal',
  imports: [RouterModule, Navbar, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
  
}
