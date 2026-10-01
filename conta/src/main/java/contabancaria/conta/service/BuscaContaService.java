package contabancaria.conta.service;

import contabancaria.conta.exception.ContaNaoEncontradaException;
import contabancaria.conta.model.Conta;
import contabancaria.conta.repository.ContaRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class BuscaContaService {

    private final ContaRepository contaRepository;

    public BuscaContaService(ContaRepository contaRepository) {
        this.contaRepository = contaRepository;
    }

    public Conta buscarPorId(UUID id) {
        return contaRepository.findById(id)
            .orElseThrow(() -> new ContaNaoEncontradaException(
                "Conta não encontrada: " + id));
    }
}
