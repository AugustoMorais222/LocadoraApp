import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  template: `
  <h1>Locadora de Veiculos</h1>
  <div style="display:flex; margin-bottom:25px">
  <nav>
    <a routerLink="/cliente">Clientes</a> |
    <a routerLink="/veiculo">Veiculos</a> |
    <a routerLink="/alugueis">Alugueis</a>|
    <a routerLink="/aluguel">Cadastrar aluguel</a>|
  </nav>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LocadoraApp';
}
