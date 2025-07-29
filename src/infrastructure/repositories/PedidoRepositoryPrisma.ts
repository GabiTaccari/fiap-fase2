import { PrismaClient } from '@prisma/client';
import { Pedido, Produto } from '../../domain/entities/Pedido';

const prisma = new PrismaClient();

export class PedidoRepositoryPrisma {
  async criarPedido(produtos: Produto[], clienteId?: string): Promise<string> {
    const pedido = await prisma.pedido.create({
      data: {
        clienteId: clienteId ?? null,
        statusPedido: 'RECEBIDO',
        statusPagamento: 'AGUARDANDO',
        itens: {
          create: produtos.map((p) => ({
            produtoId: p.id,
            quantidade: p.quantidade,
          })),
        },
      },
    });

    return pedido.id;
  }
}
