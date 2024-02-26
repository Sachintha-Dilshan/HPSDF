package lk.gov.ps.HPSDF.admin.ar.repositories;

import lk.gov.ps.HPSDF.admin.ar.models.ArchiveSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArchiveSubjectRepository extends JpaRepository<ArchiveSubject,Long> {
    @Query
    List<ArchiveSubject> findByArchiveSectionId(Long id);
}
