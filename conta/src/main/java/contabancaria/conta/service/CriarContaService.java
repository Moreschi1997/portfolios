package contabancaria.conta.service;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

import contabancaria.conta.model.Conta;
import contabancaria.conta.repository.ContaRepository;

@Service 
public class CriarContaService {
    private final ContaRepository contaRepository;

    public CriarContaService(ContaRepository contaRepository){
        this.contaRepository = contaRepository;
    }

    public Conta criarConta(BigDecimal saldoInicial){
        Conta conta = new Conta(saldoInicial);
        return contaRepository.save(conta);
    }
}
