import { TipoVeiculo } from "./tipo-veiculo";

export interface Veiculo {
  id?: number;
  modelo: string;
  tipo?: TipoVeiculo;
  disponivel: boolean;
}
