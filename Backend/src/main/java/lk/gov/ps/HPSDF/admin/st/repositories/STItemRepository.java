package lk.gov.ps.HPSDF.admin.st.repositories;

import lk.gov.ps.HPSDF.admin.ar.models.ArchiveFile;
import lk.gov.ps.HPSDF.admin.st.models.STItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface STItemRepository extends JpaRepository<STItem,Long> {
    Optional<STItem> findByItemName(String itemName);
}
