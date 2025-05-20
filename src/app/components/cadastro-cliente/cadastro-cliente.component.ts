import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';


@Component({
  selector: 'app-cadastro-cliente',
  imports: [InputMaskModule,FormsModule,ToastModule,InputTextModule,ButtonModule,FloatLabelModule],
  providers:[MessageService],
  template:`
     <p-toast></p-toast>
  <h2>Cadastrar Cliente</h2>

  <form (ngSubmit)="salvar()">
    <div style="margin-bottom:20px;">
      <p-floatlabel variant="on">
      <input type="text" pInputText [(ngModel)]="cliente.nome" name="nome"/>
       <label for="on_label">Nome</label>
      </p-floatlabel>
    </div>
    <div style="margin-bottom:20px;">
      <p-floatlabel variant="on">
        <p-inputmask mask="999.999.999-99" [(ngModel)]="cliente.cpf" name="cpf"/>
        <label for="on_label">CPF</label>
      </p-floatlabel>
    </div>
    <button pButton type="submit" label="Salvar" class="p-mt-2"></button>
  </form>
  
  
  `,
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  cliente: Cliente = {nome: '', cpf: ''};

  constructor(private clienteService: ClienteService, private messageService: MessageService){

  }

  salvar(){
    this.clienteService.insert(this.cliente).subscribe({
    next:()=>{
      this.messageService.add({severity: 'success', summary:'Sucesso', detail:'Cliente cadastrado com sucesso!'})
    },
    error:()=>{
      this.messageService.add({severity: 'error', summary:'Erro', detail:'Erro ao cadastrar cliente!'})
    }})
  }
}
