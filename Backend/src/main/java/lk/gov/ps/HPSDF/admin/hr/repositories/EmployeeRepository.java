package lk.gov.ps.HPSDF.admin.hr.repositories;

import lk.gov.ps.HPSDF.admin.hr.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String> {
}
