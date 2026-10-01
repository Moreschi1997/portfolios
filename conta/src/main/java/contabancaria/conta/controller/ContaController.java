package contabancaria.conta.controller;

import contabancaria.conta.dto.ContaResponseDTO;
import contabancaria.conta.dto.TransacaoResponseDTO;
import contabancaria.conta.dto.TransferenciaRequestDTO;
import contabancaria.conta.model.Conta;
import contabancaria.conta.model.Transacao;
import contabancaria.conta.service.BuscaContaService;
import contabancaria.conta.service.TransferenciaService;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/contas")
public class ContaController {

    private final BuscaContaService buscaContaService;
    private final TransferenciaService transferenciaService;

    public ContaController(BuscaContaService buscaContaService,
                            TransferenciaService transferenciaService) {
        this.buscaContaService = buscaContaService;
        this.transferenciaService = transferenciaService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContaResponseDTO> buscarPorId(@PathVariable UUID id) {
        Conta conta = buscaContaService.buscarPorId(id);
        ContaResponseDTO response = new ContaResponseDTO(conta.getId(), conta.getSaldo());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/transferencia")
    public ResponseEntity<TransacaoResponseDTO> transferir(@Valid @RequestBody TransferenciaRequestDTO dto) {
        Transacao transacao = transferenciaService.transferir(dto.idOrigem(), dto.idDestino(), dto.valor());

        TransacaoResponseDTO response = new TransacaoResponseDTO(
            transacao.getId(),
            transacao.getContaOrigemId(),
            transacao.getContaDestinoId(),
            transacao.getValor(),
            transacao.getDataHora()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
