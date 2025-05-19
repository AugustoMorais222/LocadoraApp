import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cadastro-veiculo',
  imports: [ButtonModule],
  template:`
    <div class="card flex justify-center">
      <p-button label="Check" />
    </div>
  `,
  styleUrl: './cadastro-veiculo.component.css'
})
export class CadastroVeiculoComponent {
    
}
  