package contabancaria.conta.service;

import contabancaria.conta.exception.SaldoInsuficienteException;
import contabancaria.conta.model.Conta;
import contabancaria.conta.model.Transacao;
import contabancaria.conta.repository.ContaRepository;
import contabancaria.conta.repository.TransacaoRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.UUID;

@Service
public class TransferenciaService {

    private final ContaRepository contaRepository;
    private final TransacaoRepository transacaoRepository;
    private final BuscaContaService buscaContaService;

    public TransferenciaService(ContaRepository contaRepository,
                                 TransacaoRepository transacaoRepository,
                                 BuscaContaService buscaContaService) {
        this.contaRepository = contaRepository;
        this.transacaoRepository = transacaoRepository;
        this.buscaContaService = buscaContaService;
    }

    @Transactional
    public Transacao transferir(UUID idOrigem, UUID idDestino, BigDecimal valor) {
        if (valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Valor de transferência deve ser positivo");
        }

        if (idOrigem.equals(idDestino)) {
            throw new IllegalArgumentException("Conta de origem e destino não podem ser iguais");
        }

        Conta origem = buscaContaService.buscarPorId(idOrigem);
        Conta destino = buscaContaService.buscarPorId(idDestino);

        if (valor.compareTo(origem.getSaldo()) > 0) {
            throw new SaldoInsuficienteException(
                "Saldo insuficiente na conta " + idOrigem);
        }

        origem.setSaldo(origem.getSaldo().subtract(valor));
        destino.setSaldo(destino.getSaldo().add(valor));

        contaRepository.save(origem);
        contaRepository.save(destino);

        Transacao transacao = new Transacao(idOrigem, idDestino, valor);
        return transacaoRepository.save(transacao);
    }
}
