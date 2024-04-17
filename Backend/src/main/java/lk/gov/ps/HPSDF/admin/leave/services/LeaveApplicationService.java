package lk.gov.ps.HPSDF.admin.leave.services;

import lk.gov.ps.HPSDF.admin.hr.repositories.EmployeeRepository;
import lk.gov.ps.HPSDF.admin.leave.dto.LeaveApplicationDto;
import lk.gov.ps.HPSDF.admin.leave.models.Leave;
import lk.gov.ps.HPSDF.admin.leave.models.LeaveApplication;
import lk.gov.ps.HPSDF.admin.leave.repositories.LeaveApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LeaveApplicationService {
    @Autowired
    private LeaveApplicationRepository leaveApplicationRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public LeaveApplication saveLeaveApplication(LeaveApplicationDto leaveApplication){

        String employeeNicNo = employeeRepository.findEmployeeNicNo(leaveApplication.getEmployeeLeaveId());
        String actingOfficerNicNo = employeeRepository.findEmployeeNicNo(leaveApplication.getActingOfficerLeaveId());

        LeaveApplication _leaveApplication = LeaveApplication.build(
                0,
                employeeNicNo,
                actingOfficerNicNo,
                leaveApplication.getSupervisorNicNo(),
                leaveApplication.getHodNicNo(),
                leaveApplication.getLeaveType(),
                leaveApplication.getLeaveCommencingDate(),
                leaveApplication.getDateOfResumingDuties(),
                leaveApplication.getLeavePeriod(),
                leaveApplication.getReason(),
                leaveApplication.getStatus()
        );
        return leaveApplicationRepository.save(_leaveApplication);
    }

    public Object[] getLeaveChit(int applicationId){
        return leaveApplicationRepository.getLeaveChit(applicationId);
    }
}
