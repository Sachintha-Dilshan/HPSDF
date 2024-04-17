package lk.gov.ps.HPSDF.admin.leave.controllers;

import jakarta.validation.Valid;
import lk.gov.ps.HPSDF.admin.leave.dto.LeaveApplicationDto;
import lk.gov.ps.HPSDF.admin.leave.models.LeaveApplication;
import lk.gov.ps.HPSDF.admin.leave.services.LeaveApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/hr/leave")
public class LeaveApplicationController {

    @Autowired
    private LeaveApplicationService leaveApplicationService;
    @PostMapping("/saveLeaveApplication")
    public ResponseEntity<LeaveApplication> saveLeaveApplication(@RequestBody @Valid LeaveApplicationDto leaveApplication){
        LeaveApplication _leaveApplication = leaveApplicationService.saveLeaveApplication(leaveApplication);
        try {
            return new ResponseEntity<>(_leaveApplication, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getLeaveChit/{applicationId}")
    public ResponseEntity<Object[]> getLeaveChit(@PathVariable int applicationId){
        return ResponseEntity.ok(leaveApplicationService.getLeaveChit(applicationId));
    }
}
