package lk.gov.ps.HPSDF.repository;

import lk.gov.ps.HPSDF.models.ERole;
import lk.gov.ps.HPSDF.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
