package contabancaria.conta.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public record ContaRequestDTO(
    @NotNull @PositiveOrZero BigDecimal saldoInicial
) {
    
}
