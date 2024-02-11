package lk.gov.ps.HPSDF.admin.hr.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "employees")
@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "build")
public class Employee {
    @Id
    @Column(name = "nic_no")
    private String nicNo;

    @Column(name = "name_with_initials")
    private String nameWithInitials;

    @Column(name = "full_name")
    private String fullName;

    @Column(name ="address")
    private String address;

    @Column(name = "gender")
    private char gender;

    @Column(name = "marital_status")
    private String maritalStatus;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "mobile_no")
    private long mobileNo;

    @Column(name = "email")
    private String email;

    @Column(name = "office_official_appointment_date")
    private Date officeOfficialAppointmentDate;

    @Column(name = "designation")
    private String designation;

    @Column(name = "service_sector")
    private String serviceSector;

    @Column(name = "designation_class")
    private int designationClass;

    @Column(name = "designation_grade")
    private int designationGrade;

    @Column(name = "first_appointment_date")
    private Date firstAppointmentDate;

    @Column(name = "duty_assigned_date")
    private Date dutyAssignedDate;

    @Column(name = "permanent")
    private boolean permanent;

    @Column(name = "nature_of_appointment")
    private String natureOfAppointment;

    @Column(name = "duty_permanent_date")
    private Date dutyPermanentDate;

    @Column(name = "salary_increment_date")
    private Date salaryIncrementDate;

    @Column(name = "salary_code")
    private String salaryCode;

    @Column(name = "wop_no")
    private String wopNo;

    @Column(name = "section")
    private int section;

    @Column(name = "subject_no")
    private String subjectNo;
}
