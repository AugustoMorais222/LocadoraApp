import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aluguel } from '../../models/aluguel';
import { AluguelService } from '../../services/aluguel.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-aluguel',
  imports: [CommonModule,FormsModule,TableModule,ButtonModule,ToastModule,CalendarModule],
  template: `
  <p-toast></p-toast>
    <h2>Aluguéis Cadastrados</h2>

    <p-table 
      [value]="alugueis" 
      [paginator]="true" 
      [rows]="10" 
      responsiveLayout="scroll"
      styleClass="p-datatable-gridlines"
    >
      <ng-template pTemplate="header">
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Veículo</th>
          <th>Início</th>
          <th>Fim</th>
          <th>Ações</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-aluguel>
        <tr>
          <td>{{ aluguel.id }}</td>
          <td>{{ aluguel.cliente.nome }}</td>
          <td>{{ aluguel.veiculo.modelo }} ({{ aluguel.veiculo.tipo }})</td>
          <td>
            <p-calendar 
              [ngModel]="aluguel.dataInicio | date:'dd/MM/aaaa'" 
              dateFormat="dd/mm/yy" 
              [disabled]="true">
            </p-calendar>
          </td>
          <td>
            <ng-container *ngIf="aluguel.dataFim; else semDevolucao">
              <p-calendar 
                [ngModel]="aluguel.dataFim | date:'dd/MM/aaaa'" 
                dateFormat="dd/mm/yy" 
                [disabled]="true">
              </p-calendar>
            </ng-container>
            <ng-template #semDevolucao>—</ng-template>
          </td>
          <td>
            <button 
              pButton 
              type="button" 
              label="Devolver" 
              icon="pi pi-undo" 
              class="p-button-warning p-button-sm"
              [disabled]="aluguel.dataFim"
              (click)="devolver(aluguel)"
            ></button>
          </td>
        </tr>
      </ng-template>
    </p-table>
    `,
  providers: [MessageService],
  styleUrl: './list-aluguel.component.css'
})
export class ListAluguelComponent {
   alugueis: Aluguel[] = [];

  constructor(
    private aluguelService: AluguelService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.aluguelService.findAll().subscribe({
      next: data => this.alugueis = data,
      error: () => this.messageService.add({ severity:'error', summary:'Erro', detail:'Falha ao carregar aluguéis' })
    });
  }

  devolver(aluguel: Aluguel) {
    const hoje = new Date();
    const atualizado: Aluguel = { ...aluguel, dataFim: hoje };
    this.aluguelService.update(atualizado).subscribe({
      next: () => {
        this.messageService.add({ severity:'success', summary:'OK', detail:'Veículo devolvido' });
        this.loadAll();
      },
      error: () => this.messageService.add({ severity:'error', summary:'Erro', detail:'Falha na devolução' })
    });
  }
}
