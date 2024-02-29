package lk.gov.ps.HPSDF.admin.ar.repositories;

import lk.gov.ps.HPSDF.admin.ar.models.ArchiveFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Repository
public interface ArchiveFileRepository extends JpaRepository<ArchiveFile,Long> {
    Optional<ArchiveFile> findByFileNumber(String FileNumber);
    Optional<ArchiveFile> findByFileName(String fileName);
    @Query("SELECT af FROM ArchiveFile af WHERE af.archiveSection.id = :sectionId ORDER BY af.id DESC")
    List<ArchiveFile> findTop5ByOrderByIdDesc(Long sectionId,org.springframework.data.domain.Pageable pageable);
    //@Query("SELECT f FROM ArchiveFile f WHERE f.id = :fileId AND f.archiveSection.id = :sectionId")
    Optional<ArchiveFile> findByIdAndArchiveSection_Id(Long fileId, Long sectionId);

    @Query("SELECT COUNT(ag) FROM ArchiveFile ag WHERE ag.archiveSection.id = ?1")
    int getFileCountsBySection(Long sectionId);
    @Query("SELECT COUNT(ag) FROM ArchiveFile ag WHERE ag.archiveSection.is = ?1")
    int getFileCountsBySection(Long sectionId);

}
