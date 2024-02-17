package lk.gov.ps.HPSDF.admin.hr.repositories;

import lk.gov.ps.HPSDF.admin.hr.models.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, String> {

}
