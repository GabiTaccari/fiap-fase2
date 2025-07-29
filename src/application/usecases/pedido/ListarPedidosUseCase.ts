
import { IPedidoRepository } from '../../../domain/repositories/IPedidoRepository';
import { Pedido } from '../../../domain/entities/Pedido';

export class ListarPedidosUseCase {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async execute(): Promise<Pedido[]> {
    const pedidos = await this.pedidoRepository.listar();

    const pedidosFiltrados = pedidos.filter(pedido => pedido.statusPedido !== 'FINALIZADO');

    // Ordena os pedidos
    const pedidosOrdenados = pedidosFiltrados.sort((a, b) => {
      const statusOrder = {
        'PRONTO': 1,
        'EM_PREPARACAO': 2,
        'RECEBIDO': 3,
      };

      const statusComparison = statusOrder[a.statusPedido] - statusOrder[b.statusPedido];
      
      if (statusComparison !== 0) {
        return statusComparison; 
      }

      return new Date(a.dataCriacao).getTime() - new Date(b.dataCriacao).getTime();
    });

    return pedidosOrdenados;
  }
}
