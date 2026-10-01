package contabancaria.conta.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;
import java.util.UUID;

public record TransferenciaRequestDTO(
    @NotNull UUID idOrigem,
    @NotNull UUID idDestino,
    @NotNull @Positive BigDecimal valor
) {
}
