import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Figura {
  private url = 'http://localhost:3000/figuras';

  constructor(private http: HttpClient) {}

  getFiguras() {
    return this.http.get<any[]>(this.url);
  }

  agregarFigura(figura: any) {
    return this.http.post(this.url, figura);
  }

  getFiguraPorId() {
    return this.http.get<any[]>('http://localhost:3000/figuraPorId');
  }
}