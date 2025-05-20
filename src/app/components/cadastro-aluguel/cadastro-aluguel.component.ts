import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Aluguel } from '../../models/aluguel';
import { Cliente } from '../../models/cliente';
import { Veiculo } from '../../models/veiculo';
import { AluguelService } from '../../services/aluguel.service';
import { ClienteService } from '../../services/cliente.service';
import { VeiculoService } from '../../services/veiculo.service';
import { CalendarModule } from 'primeng/calendar';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-cadastro-aluguel',
  imports: [CommonModule, FormsModule, SelectModule , CalendarModule, ButtonModule, InputTextModule, ToastModule,TableModule,FloatLabelModule],
  providers: [MessageService],
  template:`
    <p-toast></p-toast>
  <h2>Registrar Aluguel</h2>

  <form (ngSubmit)="registrar()">
    <div class="p-field" style="margin-bottom:20px;">
      <p-floatlabel variant="on">
        <p-select [options]="clientes" [(ngModel)]="aluguel.cliente" name="cliente" optionLabel="nome" placeholder="Selecione"></p-select >
        <label>Cliente:</label>
      </p-floatlabel>
    </div>

    <div class="p-field" style="margin-bottom:20px;">
      <p-floatlabel variant="on">
        <p-select [options]="veiculosDisponiveis" [(ngModel)]="aluguel.veiculo" name="veiculo" optionLabel="modelo" placeholder="Selecione"></p-select >
        <label>Veículo:</label>
      </p-floatlabel>
    </div>

    <div class="p-field" style="margin-bottom:20px;">
      <p-floatlabel variant="on">
        <p-calendar [(ngModel)]="aluguel.dataInicio" name="dataInicio" showIcon dateFormat="dd/mm/yy"></p-calendar>
        <label for="on_label">Data de Início</label>
      </p-floatlabel>
    </div>

    <button pButton type="submit" label="Registrar Aluguel" class="p-mt-2"></button>
  </form>
  `,
  styleUrl: './cadastro-aluguel.component.css'
})
export class CadastroAluguelComponent {
  aluguel: Aluguel = { id: 0, cliente: {} as Cliente, veiculo: {} as Veiculo, dataInicio: new Date(), dataFim: new Date() };
  clientes: Cliente[] = [];
  veiculosDisponiveis: Veiculo[] = [];
  alugueis: Aluguel[] = [];

  constructor(
    private aluguelService: AluguelService,
    private clienteService: ClienteService,
    private veiculoService: VeiculoService,
    private messageService: MessageService
  ) {
    this.clienteService.findAll().subscribe(data => this.clientes = data);
    this.veiculoService.findDisponiveis().subscribe(data => this.veiculosDisponiveis = data);
  }

  registrar() {
    this.aluguelService.insert(this.aluguel).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Aluguel registrado' });
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao registrar aluguel' });
      }
    });
  }
}
