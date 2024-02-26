package lk.gov.ps.HPSDF.admin.ar.repositories;

import lk.gov.ps.HPSDF.admin.ar.models.ArchiveSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArchiveSectionRepository extends JpaRepository<ArchiveSection,Long> {
}
