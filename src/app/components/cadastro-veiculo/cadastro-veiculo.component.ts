import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Veiculo } from '../../models/veiculo';
import { TipoVeiculo } from '../../models/tipo-veiculo';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { VeiculoService } from '../../services/veiculo.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-veiculo',
  imports: [CommonModule, FormsModule, SelectModule , CalendarModule, ButtonModule, InputTextModule, ToastModule,TableModule,FloatLabelModule],
  template:`
      <p-toast></p-toast>
  <h2>Cadastrar Veiculo</h2>

  <form (ngSubmit)="salvar()">
    <div style="margin-bottom:20px;">
      <p-floatlabel variant="on">
      <input type="text" pInputText [(ngModel)]="veiculo.modelo" name="modelo"/>
       <label for="on_label">Modelo</label>
      </p-floatlabel>
    </div>
    <div style="margin-bottom:20px;">
      <p-floatlabel variant="on">
       <p-select 
          [options]="tiposVeiculoOptions" 
          [(ngModel)]="tipoSelecionado" 
          name="tipo">
        </p-select>
       <label for="on_label">Tipo</label>
      </p-floatlabel>
    </div>
    <button pButton type="submit" label="Salvar" class="p-mt-2"></button>
  </form>
  `,
  providers:[MessageService],
  styleUrl: './cadastro-veiculo.component.css'
})
export class CadastroVeiculoComponent {
  tipoSelecionado: TipoVeiculo | null = null;

  veiculo: Veiculo = {modelo: '', disponivel: true}

  tiposVeiculoOptions = Object.values(TipoVeiculo).map(tipo => ({
    label: tipo.charAt(0) + tipo.slice(1).toLowerCase(),
    value: tipo
  }));

  constructor(private veiculoService: VeiculoService, private messageService: MessageService){

  }

  salvar(){
    this.veiculoService.insert(this.veiculo).subscribe({
    next:()=>{
      this.messageService.add({severity: 'success', summary:'Sucesso', detail:'Veículo cadastrado com sucesso!'})
    },
    error:()=>{
      this.messageService.add({severity: 'error', summary:'Erro', detail:'Erro ao cadastrar Veículo!'})
    }})
  }

}
  