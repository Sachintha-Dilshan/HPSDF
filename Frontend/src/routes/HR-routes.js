import userRoles from "../data/user-roles";
import HRDashboard from "../hr/pages/hr-dashboard";
import HRAddEmployee from "../hr/pages/hr-add-employee";
import HREmployeeProfile from "../hr/pages/hr-employee-profile";
import HRSearchEmployees from "../hr/pages/hr-search-employees";
import HRAddSections from "../hr/pages/hr-add-section";
import HRAddDesignations from "../hr/pages/hr-add-designation";
import HRAddServiceSectors from "../hr/pages/hr-add-service-sector";
import HRAddSubjects from "../hr/pages/hr-add-subject";

import HRLeaveDashboard from "../hr/leave/pages/hr-leave-dashboard";
import HREmployeeLeaveRequest from "../hr/pages/hr-leave-request";
import HROnLeaveToday from "../hr/pages/hr-on-leave-today";
import HREmployeesAttendanceSheet from "../hr/leave/pages/hr-leave-attendance-sheet";
import HRLeaveAddLeaves from "../hr/leave/pages/hr-leave-add-leaves";
import HRLeaveAddPastRecords from "../hr/leave/pages/hr-leave-add-past-records";
import HRLeaveApplyLeave from "../hr/leave/pages/hr-leave-apply-leave";


const HRRoutes = [
    {
        path : "HR/dashboard",
        element : <HRDashboard/>,
        availability : [userRoles.hrAdmin]
    },
    {
        path : "HR/addEmployee",
        element : <HRAddEmployee/>,
        availability : [userRoles.hrAdmin]
    },
    {
        path : "HR/employeeProfile",
        element : <HREmployeeProfile/>,
        availability : [userRoles.hrAdmin]
    },
    {
        path : "HR/allEmployees",
        element : <HRSearchEmployees/>,
        availability : [userRoles.hrAdmin, userRoles.user]
    },
    {
        path : "HR/addSections",
        element : <HRAddSections/>,
        availability : [userRoles.hrAdmin]
    },
    {
        path : "HR/addDesignations",
        element : <HRAddDesignations/>,
        availability : [userRoles.hrAdmin]
    },
    {
        path : "HR/addServiceSectors",
        element : <HRAddServiceSectors/>,
        availability : [userRoles.hrAdmin]
    },
    {
        path : "HR/addSubjects",
        element : <HRAddSubjects/>,
        availability : [userRoles.hrAdmin]
    },
    {
        path : "HR/Leave/dashboard",
        element : <HRLeaveDashboard/>,
        availability : [userRoles.leaveAdmin]
    },
    {
        path : "HR/Leave/leaveRequest",
        element : <HREmployeeLeaveRequest/>,
        availability : [userRoles.chairman, userRoles.secretary, userRoles.hrAdmin, userRoles.leaveAdmin, userRoles.user]   
    },
    {
        path : "HR/Leave/onLeaveToday",
        element : <HROnLeaveToday/>,
        availability : [userRoles.chairman, userRoles.hrAdmin, userRoles.leaveAdmin]
    },
    {
        path : "HR/Leave/employeeAttendanceSheet",
        element : <HREmployeesAttendanceSheet/>,
        availability : [userRoles.chairman, userRoles.secretary, userRoles.hrAdmin, userRoles.leaveAdmin]
    },
    {
        path : "HR/Leave/addLeaves",
        element : <HRLeaveAddLeaves/>,
        availability : [userRoles.leaveAdmin]
    },
    {
        path : "HR/Leave/addPastRecords",
        element : <HRLeaveAddPastRecords/>,
        availability : [userRoles.leaveAdmin]
    },
    {
        path : "HR/leave/applyLeave",
        element : <HRLeaveApplyLeave/>,
        availability : [userRoles.leaveAdmin]
    }
]

export default HRRoutes;