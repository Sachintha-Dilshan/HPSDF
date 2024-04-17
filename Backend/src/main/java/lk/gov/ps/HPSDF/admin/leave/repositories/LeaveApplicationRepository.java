package lk.gov.ps.HPSDF.admin.leave.repositories;

import lk.gov.ps.HPSDF.admin.leave.models.LeaveApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeaveApplicationRepository extends JpaRepository<LeaveApplication, Integer> {
    @Query(
            value = "select t.leave_type, l.leave_period, l.leave_commencing_date, l.date_of_resuming_duties, e.name_with_initials , l.reason from employees e, leave_application l, leave_types t where e.nic_no = l.employee_nic_no and l.leave_type = t.id and l.application_id = ?1 ",
            nativeQuery = true
    )
    Object[] getLeaveChit(int applicationId);
}
