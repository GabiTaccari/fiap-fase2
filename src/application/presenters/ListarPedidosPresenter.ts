import { Pedido } from '../../domain/entities/Pedido';

export class ListarPedidosPresenter {
  format(pedidos: Pedido[]) {
    return pedidos.map(pedido => ({
      id: pedido.id,
      clienteId: pedido.clienteId,
      statusPedido: pedido.statusPedido, 
      statusPagamento: pedido.statusPagamento,
      dataCriacao: pedido.dataCriacao,
      produtos: pedido.produtos,
    }));
  }
}
