# Simulador de Conta Bancária

Simulador de conta bancária desenvolvido em **Java + Spring Boot**, com persistência em **PostgreSQL** via Docker. O projeto contempla operações de criação de conta, consulta de saldo e transferência entre contas, com geração de comprovante (protocolo de transação) para cada transferência realizada.

```
Java 25
Spring Boot 3.5.x (Web, Data JPA, Validation)
PostgreSQL 16 (via Docker)
Maven (gerenciador de dependências e build)
Hibernate (ORM)
```
---

## Arquitetura

O projeto segue a separação clássica em camadas:
```
contabancaria.conta
├── ContaApplication.java
├── controller/
│   └── ContaController.java
├── service/
│   ├── BuscaContaService.java
│   ├── CriarContaService.java
│   └── TransferenciaService.java
├── repository/
│   ├── ContaRepository.java
│   └── TransacaoRepository.java
├── model/
│   ├── Conta.java
│   └── Transacao.java
├── dto/
│   ├── ContaRequestDTO.java
│   ├── ContaResponseDTO.java
│   ├── TransferenciaRequestDTO.java
│   └── TransacaoResponseDTO.java
└── exception/
    ├── SaldoInsuficienteException.java
    ├── ContaNaoEncontradaException.java
    └── GlobalExceptionHandler.java
```
---

## Decisões de design

- **Modelo anêmico**: as entidades (Conta, Transacao) não possuem regras de negócio — toda validação e lógica de saldo/transferência fica concentrada nos Services.
- **Services separados por responsabilidade**: BuscaContaService cuida apenas de consultas; CriarContaService cuida apenas de criação; TransferenciaService orquestra a lógica de transferência (reaproveitando BuscaContaService para localizar as contas envolvidas).
- **UUID como identificador**: tanto as contas quanto as transações usam UUID como chave primária, evitando IDs sequenciais previsíveis.
- **DTOs em todas as pontas**: a API nunca expõe as entidades JPA diretamente — toda entrada e saída passa por um DTO específico, desacoplando o contrato da API do modelo de persistência.
- **Comprovante de transação**: cada transferência gera um registro em Transacao, com um UUID próprio que funciona como protocolo/comprovante da operação. Esse registro é salvo na mesma transação (@Transactional) do débito/crédito, garantindo que nunca existe transferência sem comprovante nem comprovante de transferência que não ocorreu.

## Como rodar o projeto
### Pré-requisitos
*Java 25*
*Maven (ou usar o wrapper ./mvnw incluso no projeto)*
*Docker e Docker Compose*

### 1. Subir o banco de dados
- docker compose up -d
Isso inicia um container PostgreSQL com o banco contabancaria já configurado.

### 2. Rodar a aplicação
- ./mvnw spring-boot:run
A aplicação sobe por padrão na porta 8080