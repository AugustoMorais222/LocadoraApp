import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo';
import { environment } from '../environment';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }

  url: string = `http://localhost:${environment.port}/veiculo`

  findAll(): Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(this.url);
  }

  findById(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.url}/${id}`);
  }

  insert(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.url, veiculo);
  }

  update(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(this.url, veiculo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  findDisponiveis(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.url}/ativos`);
  }

  devolverVeiculo(id: number): Observable<void> {
    return this.http.post<void>(`${this.url}/${id}/retornar`,null);
  }

}
