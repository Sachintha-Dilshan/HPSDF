import userRoles from "../data/user-roles";
import ARHome from "../archive/pages/ar-home";
import FileCrud from "../archive/pages/ar-add-files";
import ARCheckedOutFiles from "../archive/pages/ar-checked-out-files";
import AREmployeeArchiveAccess from "../archive/pages/ar-employee-ar-access";
import ARFileLocation from "../archive/pages/ar-file-location";
import ARSearchFile from "../archive/pages/ar-search-file";


const ArchiveRoutes = [
    {
        path : "AR/fileCrud",
        element : <FileCrud/>,
        availability : [userRoles.archivist, userRoles.hrAdmin]
    },
    {
        path : "AR/archiveDashboard",
        element : <ARHome/>,
        availability : [userRoles.hrAdmin, userRoles.chairman, userRoles.secretary, userRoles.leaveAdmin, userRoles.user, userRoles.archivist]
    },
    {
        path : "AR/checkedOutFiles",
        element : <ARCheckedOutFiles/>,
        availability : [userRoles.hrAdmin, userRoles.chairman, userRoles.secretary, userRoles.archivist]
    },
    {
        path : "AR/checkedOutFilesEmployee",
        element : <AREmployeeArchiveAccess/>,
        availability : [userRoles.hrAdmin, userRoles.chairman, userRoles.secretary, userRoles.leaveAdmin, userRoles.user, userRoles.archivist]
    },
    {
        path : "AR/searchFiles",
        element : <ARSearchFile/>,
        availability : [userRoles.hrAdmin, userRoles.chairman, userRoles.secretary, userRoles.user, userRoles.leaveAdmin, userRoles.archivist]
    },
    {
        path : "AR/fileLocation",
        element : <ARFileLocation/>,
        availability : [userRoles.hrAdmin, userRoles.chairman, userRoles.secretary, userRoles.user, userRoles.leaveAdmin, userRoles.archivist]
    }
]

export default ArchiveRoutes;