package contabancaria.conta.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public record TransacaoResponseDTO(
    UUID idTransacao,
    UUID idOrigem,
    UUID idDestino,
    BigDecimal valor,
    LocalDateTime dataHora
) {
}
