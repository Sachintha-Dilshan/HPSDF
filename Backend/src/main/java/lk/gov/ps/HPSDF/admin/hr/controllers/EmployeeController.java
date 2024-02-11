package lk.gov.ps.HPSDF.admin.hr.controllers;

import jakarta.validation.Valid;
import lk.gov.ps.HPSDF.admin.hr.dto.EmployeeRequest;
import lk.gov.ps.HPSDF.admin.hr.models.Employee;
import lk.gov.ps.HPSDF.admin.hr.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ResourceBundle;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/hr")
public class EmployeeController {
    @Autowired
    public EmployeeService employeeService;
    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getEmployees(){
        return ResponseEntity.ok(employeeService.getEmployees());
    }

    @GetMapping("/employee/{nicNo}")
    public ResponseEntity<Employee> getEmployee(@PathVariable String nicNo){
        Employee employee = employeeService.getEmployee(nicNo);
        if(employee == null)
            return new ResponseEntity<>(employee, HttpStatus.NOT_FOUND);
        else
            return  new ResponseEntity<>(employee,HttpStatus.OK);
    }

    @PostMapping("/employee")
    public ResponseEntity<Employee> addEmployee(@RequestBody @Valid EmployeeRequest employeeRequest){
        Employee employee = employeeService.addEmployee(
          Employee.build(
                  employeeRequest.getNicNo(),
                  employeeRequest.getNameWithInitials(),
                  employeeRequest.getFullName(),
                  employeeRequest.getAddress(),
                  employeeRequest.getGender(),
                  employeeRequest.getMaritalStatus(),
                  employeeRequest.getDob(),
                  employeeRequest.getMobileNo(),
                  employeeRequest.getEmail(),
                  employeeRequest.getOfficeOfficialAppointmentDate(),
                  employeeRequest.getDesignation(),
                  employeeRequest.getServiceSector(),
                  employeeRequest.getDesignationClass(),
                  employeeRequest.getDesignationGrade(),
                  employeeRequest.getFirstAppointmentDate(),
                  employeeRequest.getDutyAssignedDate(),
                  employeeRequest.isPermanent(),
                  employeeRequest.getNatureOfAppointment(),
                  employeeRequest.getDutyPermanentDate(),
                  employeeRequest.getSalaryIncrementDate(),
                  employeeRequest.getSalaryCode(),
                  employeeRequest.getWopNo(),
                  employeeRequest.getSection(),
                  employeeRequest.getSubjectNo()
          )
        );

        try {
            return new ResponseEntity<>(employee, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("employee/{nicNo}")
    public ResponseEntity<Employee> updateEmployee(@RequestBody @Valid EmployeeRequest employeeRequest){
        Employee employee = employeeService.updateEmployee(
                Employee.build(
                        employeeRequest.getNicNo(),
                        employeeRequest.getNameWithInitials(),
                        employeeRequest.getFullName(),
                        employeeRequest.getAddress(),
                        employeeRequest.getGender(),
                        employeeRequest.getMaritalStatus(),
                        employeeRequest.getDob(),
                        employeeRequest.getMobileNo(),
                        employeeRequest.getEmail(),
                        employeeRequest.getOfficeOfficialAppointmentDate(),
                        employeeRequest.getDesignation(),
                        employeeRequest.getServiceSector(),
                        employeeRequest.getDesignationClass(),
                        employeeRequest.getDesignationGrade(),
                        employeeRequest.getFirstAppointmentDate(),
                        employeeRequest.getDutyAssignedDate(),
                        employeeRequest.isPermanent(),
                        employeeRequest.getNatureOfAppointment(),
                        employeeRequest.getDutyPermanentDate(),
                        employeeRequest.getSalaryIncrementDate(),
                        employeeRequest.getSalaryCode(),
                        employeeRequest.getWopNo(),
                        employeeRequest.getSection(),
                        employeeRequest.getSubjectNo()
                )
        );

        if(employee == null)
            return new ResponseEntity<>(employee,HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<>(employee, HttpStatus.OK);

    }

    @DeleteMapping("/employee/{nicNo}")
    public String deleteEmployee(@PathVariable String nicNo){
        if(employeeService.deleteEmployee(nicNo))
            return "Employee has been deleted";
        else
            return "Employee is not found";
    }

}
