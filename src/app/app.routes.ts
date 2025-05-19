import { Routes } from '@angular/router';
import { CadastroAluguelComponent } from './components/cadastro-aluguel/cadastro-aluguel.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastroVeiculoComponent } from './components/cadastro-veiculo/cadastro-veiculo.component';

export const routes: Routes = [
    { path: '', redirectTo: '/aluguel', pathMatch: 'full' },
    {path: 'aluguel',component:CadastroAluguelComponent},
    {path: 'cliente',component:CadastroClienteComponent},
    {path: 'veiculo',component:CadastroVeiculoComponent}
];
