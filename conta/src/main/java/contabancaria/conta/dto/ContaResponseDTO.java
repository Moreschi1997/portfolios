package contabancaria.conta.dto;

import java.util.UUID;
import java.math.BigDecimal;

public record ContaResponseDTO(UUID id, BigDecimal saldo) {
}
