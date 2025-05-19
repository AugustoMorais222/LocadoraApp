import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Aluguel } from '../models/aluguel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {

  constructor(private http: HttpClient) { }

  url: string = `http://localhost:${environment.port}/aluguel`

  findAll(): Observable<Aluguel[]>{
    return this.http.get<Aluguel[]>(this.url);
  }

  findById(id: number): Observable<Aluguel> {
    return this.http.get<Aluguel>(`${this.url}/${id}`);
  }

  insert(aluguel: Aluguel): Observable<Aluguel> {
    return this.http.post<Aluguel>(this.url, aluguel);
  }

  update(aluguel: Aluguel): Observable<Aluguel> {
    return this.http.put<Aluguel>(this.url, aluguel);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
