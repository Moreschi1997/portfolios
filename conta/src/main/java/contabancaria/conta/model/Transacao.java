package contabancaria.conta.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "transacoes")
public class Transacao {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private UUID contaOrigemId;

    @Column(nullable = false)
    private UUID contaDestinoId;

    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal valor;

    @Column(nullable = false)
    private LocalDateTime dataHora;

    protected Transacao() {
        // exigido pelo JPA
    }

    public Transacao(UUID contaOrigemId, UUID contaDestinoId, BigDecimal valor) {
        this.contaOrigemId = contaOrigemId;
        this.contaDestinoId = contaDestinoId;
        this.valor = valor;
        this.dataHora = LocalDateTime.now();
    }

    public UUID getId() {
        return id;
    }

    public UUID getContaOrigemId() {
        return contaOrigemId;
    }

    public UUID getContaDestinoId() {
        return contaDestinoId;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }
}
