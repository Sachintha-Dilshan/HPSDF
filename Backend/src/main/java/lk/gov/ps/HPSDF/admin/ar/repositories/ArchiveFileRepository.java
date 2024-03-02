package lk.gov.ps.HPSDF.admin.ar.repositories;

import jakarta.annotation.Nullable;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveFile;
import lk.gov.ps.HPSDF.admin.hr.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Repository
public interface ArchiveFileRepository extends JpaRepository<ArchiveFile,Long> {
    Optional<ArchiveFile> findByFileNumber(String FileNumber);
    Optional<ArchiveFile> findByFileName(String fileName);
    @Query("SELECT af FROM ArchiveFile af WHERE af.archiveSection.id = :sectionId ORDER BY af.id DESC")
    List<ArchiveFile> findTop5ByOrderByIdDesc(String sectionId,org.springframework.data.domain.Pageable pageable);
    //@Query("SELECT f FROM ArchiveFile f WHERE f.id = :fileId AND f.archiveSection.id = :sectionId")
    Optional<ArchiveFile> findByIdAndArchiveSection_Id(Long fileId, String sectionId);

    @Query("SELECT COUNT(ag) FROM ArchiveFile ag WHERE ag.archiveSection.id = ?1")
    int getFileCountsBySection(String sectionId);
    @Query("SELECT COUNT(ag) FROM ArchiveFile ag WHERE ag.isCheckedOut =true ")
    int getFileCountsCheckedOut();

    @Query("SELECT af FROM ArchiveFile af " +
            "WHERE (:isCheckedOut IS NULL OR af.isCheckedOut = :isCheckedOut) " +
            "AND (:fileNumber IS NULL OR af.fileNumber = :fileNumber) " +
            "AND (:fileName IS NULL OR af.fileName = :fileName) " +
            "AND (:sectionName IS NULL OR af.archiveSection.sectionName = :sectionName) " +
            "AND (:subjectName IS NULL OR af.archiveSubject.subjectName = :subjectName) " +
            "AND (:employeeNIC IS NULL OR af.employee.nicNo = :employeeNIC)")
    List<ArchiveFile> findByDynamicParameters(
            @Param("isCheckedOut") Boolean isCheckedOut,
            @Param("fileNumber") String fileNumber,
            @Param("fileName") String fileName,
            @Param("sectionName") String sectionName,
            @Param("subjectName") String subjectName,
            @Param("employeeNIC") String employeeNIC
    );

}
