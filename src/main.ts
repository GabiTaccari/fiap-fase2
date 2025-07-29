import express from 'express';
import cors from 'cors';
import pedidosRouter from './interfaces/routes/pedidos';
import pagamentoRoutes from './interfaces/routes/pagamento';
import { setupSwagger } from './config/swagger';
import 'dotenv/config';
import webhookRoute from './interfaces/routes/webhook';
import clienteRoutes from './interfaces/routes/clientes';
import produtoRoutes from './interfaces/routes/produtos';
import categoriaRoutes from './interfaces/routes/categorias';



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/api/clientes', clienteRoutes);

setupSwagger(app); // Ativa o Swagger

app.use('/api/pedidos', pedidosRouter);
app.use('/api/pagamento', pagamentoRoutes);
app.use('/webhook', webhookRoute);
app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);
app.use('/api/categorias', categoriaRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
