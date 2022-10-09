package dev.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import dev.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
