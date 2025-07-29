# fiap-fase2
Pós Fiap | Fase 2

<h2>FastFood API - SOAT Tech Challenge</h2>
<hr>
Este projeto é uma API para um sistema de autoatendimento de uma lanchonete, desenvolvida utilizando arquitetura hexagonal e clean architecture.
<br>
Arquitetura desenvolvida:
<br><br>
<img align="center" width="821" height="831" alt="Arquitetura Cluster Aplicação" src="https://github.com/user-attachments/assets/10df2e49-5607-4cf1-b8c8-6cba4c3f16db" />
<br>
<img align="center" width="761" height="571" alt="Arquitetura Aplicação" src="https://github.com/user-attachments/assets/b3072f35-9d00-493e-a2e7-7ddfcaf5a6a9" />

Postman Collection:

Funcionalidades atendidas:
- Produtos:
    - Cadastro de novos produtos
    - Alteração de dados dos produtos
    - Deleção/Inativação do produto
    - Busca de produto
    - Listagem de produto
      
- Clientes:
    - Cadastro de novos clientes
    - Atualização de dados de clientes
    - Deleção/Inativação de cliente
    - Busca de cliente
    - Listagem de clientes
 
- Pedido:
    - Cadastro de novos pedidos
    - Atualização de status de pedido
    - Atualização de status de pagamento do pedido
    - Busca de pedido
    - Listagem de pedidos
 
- Pagamento:
    - Criação de novo pagamento para pedido
    - QR Code de pagamento do mercado pago
    - Webhook de retorno para confirmação de pagamento
    - Consulta de status de pagamento
  
Como executar localmente:

Start do docker:
```console
docker compose build --no-cache
docker compose up
```
Start do ngrok 

Como executar localmente (minikube)

Execução das APIs:

Vídeo de apresentação:


Alunos:
Gabriela Gonçalves Taccari (RM:rm360973 Discord:)
Rainer Lima Gramm
Felipe Mello 
