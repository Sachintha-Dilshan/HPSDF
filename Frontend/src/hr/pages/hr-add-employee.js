import React from "react";
import CollapseBar from "../../layouts/collapse-bar";
import EmployeeService from "../services/add-new-employee-service";

import {
  FloatingLabel,
  Select,
  Label,
  Radio,
  TextInput,
  Modal,
  Button,
  FileInput,
  Avatar,
} from "flowbite-react";
import { HiMail, HiOutlineSave } from "react-icons/hi";
import {
  FaPhone,
  FaCalendar,
  FaSearch,
  FaSyncAlt,
  FaEraser,
} from "react-icons/fa";

import {
  MdDelete,
  MdDoneOutline,
  MdRadioButtonUnchecked,
  MdError,
} from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

function HRAddEmployee() {
  const [message, setMessage] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [serachId, setSearchId] = React.useState("");
  const [image, setImage] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [imageError, setImageError] = React.useState("");

  const [employeeData, setEmployeeData] = React.useState({
    nicNo: "",
    address: "",
    designation: "",
    designationClass: "",
    designationGrade: "",
    dob: "",
    dutyAssignedDate: "",
    dutyPermanentDate: "",
    email: "",
    firstAppointmentDate: "",
    fullName: "",
    gender: "",
    maritalStatus: "",
    mobileNo: "",
    nameWithInitials: "",
    natureOfAppointment: "",
    officeOfficialAppointmentDate: "",
    permanent: "",
    salaryCode: "",
    salaryIncrementDate: "",
    section: "",
    serviceSector: "",
    subjectNo: "",
    wopNo: "",
    sectionAssignedDate: "",
    leaveId: "",
  });

  const handleImageChange = (event) => {
    const uploadedImage = event.target.files[0];
    setImage(uploadedImage);
    // const reader = new FileReader();

    const isImage = uploadedImage && uploadedImage.type.startsWith("image/");

    if (!isImage) {
       // Handle invalid file type
       setImageError("Please select a valid image file.");
       return;
     }

    // reader.onload = () => {
    //   // Set the image data URL to the state
    //   setImageUrl(reader.result);
    // };

    // reader.readAsDataURL(uploadedImage);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData((prevEmployeeData) => {
      return {
        ...prevEmployeeData,
        [name]: value,
      };
    });

    console.log(employeeData.dob);
  };

  const resetEmployeeData = () => {
    setEmployeeData({
      nicNo: "",
      address: "",
      designation: "",
      designationClass: "",
      designationGrade: "",
      dob: "",
      dutyAssignedDate: "",
      dutyPermanentDate: "",
      email: "",
      firstAppointmentDate: "",
      fullName: "",
      gender: "",
      maritalStatus: "",
      mobileNo: "",
      nameWithInitials: "",
      natureOfAppointment: "",
      officeOfficialAppointmentDate: "",
      permanent: "",
      salaryCode: "",
      salaryIncrementDate: "",
      section: "",
      serviceSector: "",
      subjectNo: "",
      wopNo: "",
      sectionAssignedDate: "",
      leaveId: "",
    });
    setSearchId("");
    setImage("");
    setImageUrl("");
    setImageError("");
  };

  const addEmployee = () => {
    if (employeeData.nicNo === "") {
      setMessage("ජාතික හැදුනුම්පත් අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.nameWithInitials === "") {
      setMessage(
        "මුලකුරු සම‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ඟ නම ඇතුලත් කිරීම අනිවාර්යයයි."
      );
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.fullName === "") {
      setMessage("සම්පූර්ණ නම ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.address === "") {
      setMessage("ස්ථීර ලිපිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.gender === "") {
      setMessage("ස්ත්‍රී පුරුෂ භාවය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.maritalStatus === "") {
      setMessage("විවාහක අවිවාහක බව ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.dob === "") {
      setMessage("උපන් දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.mobileNo === "") {
      setMessage("ජංගම දුරකථන අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.email === "") {
      setMessage("පෞද්ගලික විද්‍යුත් තැපෑල ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.officeOfficialAppointmentDate === "") {
      setMessage(
        "වර්ථමාන සේවා ස්ථානයේ රාජකාරි භාරගත් දිනය ඇතුලත් කිරීම අනිවාර්යයයි."
      );
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.designation === "") {
      setMessage("තනතුර ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.serviceSector === "") {
      setMessage("තනතුර ඇතුලත් වන සේවා කාණ්ඩය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.designationClass === "") {
      setMessage("තනතුර අයත් වන පන්තිය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.designationGrade === "") {
      setMessage("තනතුර අයත් වන ශ්‍රේණිය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.firstAppointmentDate === "") {
      setMessage("මුල් පත්වීම් දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.dutyAssignedDate === "") {
      setMessage(
        "මුල් පත්වීමට අනුව රාජකාරි භාරගත් දිනය ඇතුලත් කිරීම අනිවාර්යයයි."
      );
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.permanent === "") {
      setMessage("පත්වීම ස්තීරද නැද්ද යන්න ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.dutyPermanentDate === "") {
      setMessage("සේවය ස්ථීර කල දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.salaryIncrementDate === "") {
      setMessage("වටුප් වර්ධක දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.salaryCode === "") {
      setMessage("වැටුප් කේතය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.wopNo === "") {
      setMessage("වැ.අ.වි.වැ අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.section === "") {
      setMessage("දැනට රාජකාරියෙහි යෙදෙන අංශය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.subjectNo === "") {
      setMessage("දැනට රාජකාරියෙහි යෙදෙන විෂය අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.sectionAssignedDate === "") {
      setMessage("අදාල අංශයෙහි වැඩභාරගත් දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.natureOfAppointment === "") {
      setMessage("පත්වීමේ ස්වභාවය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.leaveId === "") {
      setMessage("නිවාඩු අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (image === "") {
      setMessage("ඡායාරූපය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else {
      EmployeeService.getEmployee(employeeData.nicNo)
        .then((response) => {
          setMessage(response.data.nicNo + " \n දැනටමත් පද්ධතියට ඇතුලත් කර ඇත");
          setTitle("Error");
          setOpenModal(true);
          // resetEmployeeData();
        })
        .catch(() => {
          EmployeeService.uploadImage(employeeData.nicNo, image)
            .then(() => {
              EmployeeService.addEmployee(employeeData)
                .then(() => {
                  setMessage(
                    employeeData.nicNo + " පද්ධතියට සාර්ථකව ඇතුලත් කරන ලදී"
                  );
                  setTitle("Success");
                  setOpenModal(true);
                  resetEmployeeData();
                })
                .catch((error) => {
                  if (
                    error.response &&
                    error.response.data &&
                    error.response.data.error
                  ) {
                    setMessage(error.response.data.error);
                  } else {
                    setMessage("දත්ත ඇතුලත් කිරීමේදී දෝෂයක් සිදු වී ඇත !");
                  }
                  setTitle("Error");
                  setOpenModal(true);
                });
            })
            .catch((error) => {
              if (
                error.response &&
                error.response.data &&
                error.response.data.error
              ) {
                setMessage(error.response.data.error);
              } else {
                setMessage("ජායාරූපය ඇතුලත් කිරීමේදී දෝෂයක් සිදු වී ඇත !");
              }
              setTitle("Error");
              setOpenModal(true);
            });
        });
    }
  };

  const updateEmployee = () => {
    if (employeeData.nicNo === "") {
      setMessage("ජාතික හැදුනුම්පත් අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.nameWithInitials === "") {
      setMessage(
        "මුලකුරු සම‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ඟ නම ඇතුලත් කිරීම අනිවාර්යයයි."
      );
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.fullName === "") {
      setMessage("සම්පූර්ණ නම ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.address === "") {
      setMessage("ස්ථීර ලිපිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.gender === "") {
      setMessage("ස්ත්‍රී පුරුෂ භාවය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.maritalStatus === "") {
      setMessage("විවාහක අවිවාහක බව ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.dob === "") {
      setMessage("උපන් දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.mobileNo === "") {
      setMessage("ජංගම දුරකථන අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.email === "") {
      setMessage("පෞද්ගලික විද්‍යුත් තැපෑල ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.officeOfficialAppointmentDate === "") {
      setMessage(
        "වර්ථමාන සේවා ස්ථානයේ රාජකාරි භාරගත් දිනය ඇතුලත් කිරීම අනිවාර්යයයි."
      );
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.designation === "") {
      setMessage("තනතුර ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.serviceSector === "") {
      setMessage("තනතුර ඇතුලත් වන සේවා කාණ්ඩය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.designationClass === "") {
      setMessage("තනතුර අයත් වන පන්තිය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.designationGrade === "") {
      setMessage("තනතුර අයත් වන ශ්‍රේණිය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.firstAppointmentDate === "") {
      setMessage("මුල් පත්වීම් දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.dutyAssignedDate === "") {
      setMessage(
        "මුල් පත්වීමට අනුව රාජකාරි භාරගත් දිනය ඇතුලත් කිරීම අනිවාර්යයයි."
      );
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.permanent === "") {
      setMessage("පත්වීම ස්තීරද නැද්ද යන්න ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.dutyPermanentDate === "") {
      setMessage("සේවය ස්ථීර කල දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.salaryIncrementDate === "") {
      setMessage("වටුප් වර්ධක දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.salaryCode === "") {
      setMessage("වැටුප් කේතය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.wopNo === "") {
      setMessage("වැ.අ.වි.වැ අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.section === "") {
      setMessage("දැනට රාජකාරියෙහි යෙදෙන අංශය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.subjectNo === "") {
      setMessage("දැනට රාජකාරියෙහි යෙදෙන විෂය අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.sectionAssignedDate === "") {
      setMessage("අදාල අංශයෙහි වැඩභාරගත් දිනය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.natureOfAppointment === "") {
      setMessage("පත්වීමේ ස්වභාවය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (employeeData.leaveId === "") {
      setMessage("නිවාඩු අංකය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else if (image === "") {
      setMessage("ඡායාරූපය ඇතුලත් කිරීම අනිවාර්යයයි.");
      setTitle("Empty");
      setOpenModal(true);
    } else {
      EmployeeService.getEmployee(employeeData.nicNo)
        .then(() => {
          EmployeeService.updateEmployee(employeeData)
            .then((response) => {
              setMessage(
                response.data.nicNo + " පද්ධතියට සාර්ථකව යාවත්කාලීන කරන ලදී"
              );
              resetEmployeeData();
              setTitle("Success");
              setOpenModal(true);
            })
            .catch((error) => {
              setMessage(error.response.data.error);
              setTitle("Error");
              setOpenModal(true);
            });
        })
        .catch(() => {
          setMessage(employeeData.nicNo + " \n  පද්ධතියට ඇතුලත් කර නොමැත");
          resetEmployeeData();
          setTitle("Error");
          setOpenModal(true);
        });
    }
  };

  const deleteEmployee = () => {
    if (serachId !== "") {
      setMessage("ඔබට " + serachId + " පද්ධතියෙන් ඉවත් කිරීමට අවශ්‍යද ?");
      setTitle("Warning");
      setShow(true);
      setOpenModal(true);
    } else {
      setMessage("කරුණාකර පළමුව ජාතික හැදුනුම්පත් අංකය ඇතුලත් කරන්න");
      setTitle("Empty");
      setOpenModal(true);
    }
  };

  const searchEmployee = () => {
    if (serachId === "") {
      setMessage("සෙවීම සඳහා කරුණාකර ජාතික හැදුනුම්පත් අංකය ඇතුලත් කරන්න");
      setTitle("Empty");
      setOpenModal(true);
    } else {
      EmployeeService.getImage(serachId)
        .then((response) => {
          const imageUrl = URL.createObjectURL(response.data);
          setImageUrl(imageUrl);
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.error
          ) {
            setMessage(error.response.data.error);
          } else {
            setMessage("Error fetching image");
          }
          setTitle("Error");
          setOpenModal(true);
        });

      EmployeeService.getEmployee(serachId)
        .then((response) => {
          setEmployeeData(response.data);
        })
        .catch(() => {
          setMessage(serachId + " පද්ධතියට ඇතුලත් කර නොමැත");
          setTitle("Error");
          setOpenModal(true);
          setSearchId("");
        });
    }
  };
  return (
    <main>
      <CollapseBar />
      <div className="flex flex-col  gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
          Add New Employee
        </h3>

        <fieldset className="border rounded-lg flex items-center justify-center lg:flex-row  flex-col p-5 md:gap-10 gap-5 m-5">
          <FloatingLabel
            variant="filled"
            label="ජාතික හැදුනුම්පත් අංකය"
            value={serachId}
            onChange={(event) => setSearchId(event.target.value)}
          />

          <Button
            className="uppercase w-52"
            color="blue"
            onClick={searchEmployee}
          >
            {" "}
            <FaSearch className="mr-2 h-5 w-5" />
            Search Employee
          </Button>

          <Button className="uppercase w-52" onClick={addEmployee}>
            {" "}
            <HiOutlineSave className="mr-2 h-5 w-5" />
            Add Employee
          </Button>
          <Button
            className="uppercase w-52"
            color="purple"
            onClick={updateEmployee}
          >
            {" "}
            <FaSyncAlt className="mr-2 h-5 w-5" />
            Update Employee
          </Button>
          <Button
            className="uppercase w-52"
            color="failure"
            onClick={deleteEmployee}
          >
            {" "}
            <MdDelete className="mr-2 h-5 w-5" /> Delete Employee
          </Button>
          <Button
            className="uppercase w-52 bg-slate-600"
            onClick={resetEmployeeData}
          >
            {" "}
            <FaEraser className="mr-2 h-5 w-5" /> Clear Employee
          </Button>
        </fieldset>

        {/* Image upload section starts here */}
        <fieldset className="flex items-center justify-center md:flex-row  flex-col md:gap-32 gap-5 ">
          <Avatar
            img={process.env.PUBLIC_URL + imageUrl}
            alt="Profile Image"
            size="xl"
            rounded
          />
          <div id="fileUpload" className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="image" value="Upload Image" />
            </div>
            <FileInput
              id="image"
              helperText={imageError}
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
          </div>
        </fieldset>

        {/* Personal details starts here */}
        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
            <legend className="text-slate-600">පුද්ගලික තොරතුරු</legend>
            <FloatingLabel
              variant="filled"
              label="ජාතික හැදුනුම්පත් අංකය"
              name="nicNo"
              onChange={handleChange}
              value={employeeData.nicNo}
            />
            <FloatingLabel
              variant="filled"
              label="මුලකුරු සමඟ නම"
              name="nameWithInitials"
              value={employeeData.nameWithInitials}
              onChange={handleChange}
            />
            <FloatingLabel
              variant="filled"
              label="සම්පූර්ණ නම"
              name="fullName"
              value={employeeData.fullName}
              onChange={handleChange}
            />
            <FloatingLabel
              variant="filled"
              label="ස්ථිර ලිපිනය"
              name="address"
              value={employeeData.address}
              onChange={handleChange}
            />

            <div className="flex items-center md:gap-20 md:justify-center justify-between">
              <div>
                <Radio
                  id="male"
                  name="gender"
                  value="M"
                  onChange={handleChange}
                  checked={employeeData.gender === "M"}
                />
                <Label htmlFor="male" className="text-slate-500 text-base ml-2">
                  පුරුෂ
                </Label>
              </div>
              <div>
                <Radio
                  id="female"
                  name="gender"
                  value="F"
                  onChange={handleChange}
                  checked={employeeData.gender === "F"}
                />
                <Label
                  htmlFor="female"
                  className="text-slate-500 text-base ml-2"
                >
                  ස්ත්‍රී
                </Label>
              </div>
            </div>

            <div className="flex items-center md:gap-20 md:justify-center justify-between">
              <div>
                <Radio
                  id="married"
                  name="maritalStatus"
                  value="Married"
                  onChange={handleChange}
                  checked={employeeData.maritalStatus === "Married"}
                />
                <Label
                  htmlFor="married"
                  className="text-slate-500 text-base ml-2"
                >
                  විවාහක
                </Label>
              </div>
              <div>
                <Radio
                  id="unmarried"
                  name="maritalStatus"
                  value="Unmarried"
                  onChange={handleChange}
                  checked={employeeData.maritalStatus === "Unmarried"}
                />
                <Label
                  htmlFor="unmarried"
                  className="text-slate-500 text-base ml-2"
                >
                  අවිවාහක
                </Label>
              </div>
            </div>

            <div>
              <Label htmlFor="dob" className="m-1 text-slate-500 text-center">
                උපන් දිනය
              </Label>
              <TextInput
                id="dob"
                placeholder="yyyy-mm-dd"
                icon={FaCalendar}
                name="dob"
                value={employeeData.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label
                htmlFor="mobileNo"
                className="m-1 text-slate-500 text-center"
              >
                ජංගම දුරකථන අංකය
              </Label>
              <TextInput
                id="mobileNo"
                type="number"
                icon={FaPhone}
                name="mobileNo"
                value={employeeData.mobileNo}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="email" className="m-1 text-slate-500 text-center">
                පෞද්ගලික විද්‍යුත් තැපෑල
              </Label>
              <TextInput
                id="email"
                type="email"
                icon={HiMail}
                name="email"
                value={employeeData.email}
                onChange={handleChange}
              />
            </div>
          </fieldset>
        </div>
        {/* Personlan details ends here */}

        {/* Job details starts here */}

        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
            <legend className="text-slate-600">රැකියාව පිළිබ‌ඳ තොරතුරු</legend>
            <div>
              <Label
                htmlFor="officeOfficialAppointmentDate"
                className="m-1 text-slate-500 text-center"
              >
                වර්ථමාන සේවා ස්ථානයේ රාජකාරි භාරගත් දිනය
              </Label>
              <TextInput
                id="officeOfficialAppointmentDateob"
                placeholder="yyyy-mm-dd"
                icon={FaCalendar}
                name="officeOfficialAppointmentDate"
                value={employeeData.officeOfficialAppointmentDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label
                htmlFor="designation"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              >
                තනතුර
              </Label>
              <Select
                id="designation"
                name="designation"
                value={employeeData.designation}
                onChange={handleChange}
              >
                <option value="">-----Select-----</option>
                <option value="සභාපති">සභාපති</option>
                <option value="ලේකම්">ලේකම්</option>
                <option value="කළමණාකරණ සේවා නිලධාරී">
                  කළමණාකරණ සේවා නිලධාරී
                </option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="segment"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              >
                තනතුර අයත් වන සේවා කාණ්ඩය
              </Label>
              <Select
                id="segment"
                name="serviceSector"
                value={employeeData.serviceSector}
                onChange={handleChange}
              >
                <option value="">-----Select-----</option>
                <option value="පළාත් රාජ්‍ය සේවය">පළාත් රාජ්‍ය සේවය</option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="class"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              >
                තනතුර අයත් වන පන්තිය
              </Label>
              <Select
                id="class"
                name="designationClass"
                value={employeeData.designationClass}
                onChange={handleChange}
              >
                <option value="">-----Select-----</option>
                <option value={1}>I</option>
                <option value={2}>II</option>
                <option value={3}>III</option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="grade"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              >
                තනතුර අයත් වන ශ්‍රේණිය
              </Label>
              <Select
                id="grade"
                name="designationGrade"
                value={employeeData.designationGrade}
                onChange={handleChange}
              >
                <option value="">-----Select-----</option>
                <option value={1}>I</option>
                <option value={2}>II</option>
                <option value={3}>III</option>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="firstAppointmentDate"
                className="m-1 text-slate-500 text-center"
              >
                මුල් පත්වීම් දිනය
              </Label>
              <TextInput
                id="firstAppointmentDate"
                placeholder="yyyy-mm-dd"
                icon={FaCalendar}
                name="firstAppointmentDate"
                value={employeeData.firstAppointmentDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label
                htmlFor="dutyAssignedDate"
                className="m-1 text-slate-500 text-center"
              >
                මුල් පත්වීම අනුව රාජකාරි භාරගත් දිනය
              </Label>
              <TextInput
                id="dutyAssignedDate"
                placeholder="yyyy-mm-dd"
                icon={FaCalendar}
                name="dutyAssignedDate"
                value={employeeData.dutyAssignedDate}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center md:gap-20 md:justify-center justify-between">
              <div>
                <Radio
                  id="permanent"
                  name="permanent"
                  value="true"
                  checked={
                    employeeData.permanent === "true" ||
                    employeeData.permanent === true
                  }
                  onChange={handleChange}
                />
                <Label
                  htmlFor="permanent"
                  className="text-slate-500 text-base ml-2"
                >
                  පත්වීම ස්ථීරයි
                </Label>
              </div>
              <div>
                <Radio
                  id="notPermanent"
                  name="permanent"
                  value="false"
                  checked={
                    employeeData.permanent === "false" ||
                    employeeData.permanent === false
                  }
                  onChange={handleChange}
                />
                <Label
                  htmlFor="notPermanent"
                  className="text-slate-500 text-base ml-2"
                >
                  පත්වීම ස්ථීර නැත
                </Label>
              </div>
            </div>

            <div>
              <Label
                htmlFor="dutyPermanentDate"
                className="m-1 text-slate-500 text-center"
              >
                සේවය ස්ථීර කල දිනය
              </Label>
              <TextInput
                id="dutyPermanentDate"
                placeholder="yyyy-mm-dd"
                icon={FaCalendar}
                name="dutyPermanentDate"
                value={employeeData.dutyPermanentDate}
                onChange={handleChange}
              />
            </div>

            <FloatingLabel
              variant="filled"
              label="වැටුප් වර්ධක දිනය"
              value={employeeData.salaryIncrementDate}
              name="salaryIncrementDate"
              onChange={handleChange}
            />
            <FloatingLabel
              variant="filled"
              label="වැටුප් කේතය"
              value={employeeData.salaryCode}
              name="salaryCode"
              onChange={handleChange}
            />
            <FloatingLabel
              variant="filled"
              label="වැ.අ.වි.වැ අංකය"
              value={employeeData.wopNo}
              name="wopNo"
              onChange={handleChange}
            />
          </fieldset>
        </div>
        {/* Job details ends here */}

        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
            <legend className="text-slate-600">
              රැකියා විෂය පථය පිළිබ‌ඳ තොරතුරු
            </legend>
            <div>
              <Label
                htmlFor="section"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              >
                අංශය
              </Label>
              <Select
                id="section"
                value={employeeData.section}
                name="section"
                onChange={handleChange}
              >
                <option value="">-----Select-----</option>
                <option value={1}>ආයතන හා පාලන අංශය</option>
                <option value={2}>ආදායම් අංශය</option>
                <option value={3}>ගිණුම් අංශය</option>
                <option value={4}>කර්මාන්ත අංශය අංශය</option>
                <option value={5}>පරිසර අංශය</option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="subjectId"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              >
                විෂය අංකය
              </Label>
              <Select
                id="subjectId"
                value={employeeData.subjectNo}
                name="subjectNo"
                onChange={handleChange}
              >
                <option value="">-----Select-----</option>
                <option value="02/01">02/01</option>
                <option value="02/02">02/02</option>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="sectionAssignedDate"
                className="m-1 text-slate-500 text-center"
              >
                අදාල අංශයෙහි වැඩ භාරගත් දිනය
              </Label>
              <TextInput
                id="sectionAssignedDate"
                placeholder="yyyy-mm-dd"
                icon={FaCalendar}
                name="sectionAssignedDate"
                value={employeeData.sectionAssignedDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <Select
                value={employeeData.natureOfAppointment}
                name="natureOfAppointment"
                onChange={handleChange}
              >
                <option value="">---පත්වීමේ ස්වභාවය---</option>
                <option value="ස්ථීර / වැටුප් සහිත">ස්ථීර / වැටුප් සහිත</option>
                <option value="දෛනික">දෛනික</option>
              </Select>
            </div>

            <FloatingLabel
              variant="filled"
              label="නිවාඩු අංකය"
              name="leaveId"
              value={employeeData.leaveId}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
            <legend className="text-slate-600">
              පද්ධති පරිශීලක ගිණුම සම්බන්ධ තොරතුරු
            </legend>

            <FloatingLabel variant="filled" label="පරිශීලක නාමය" />
            <FloatingLabel variant="filled" label="මුරපදය" />

            <div>
              <Select id="role" required>
                <option>---තනතුර---</option>
                <option>සභාපති</option>
                <option>ලේකම්</option>
                <option>අධීක්ෂක</option>
                <option>නිවාඩු අංශය භාර නිලධාරි</option>
                <option>ලේඛනාගරය භාර නිලධාරි</option>
                <option>ආයතන අංශය භාර නිලධාරි</option>
                <option>ගබඩාව භාර නිලධාරි</option>
              </Select>
            </div>
          </fieldset>
        </div>
      </div>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          {title === "Error" && (
            <MdError className="inline-block text-red-500 text-4xl mr-5" />
          )}
          {title === "Empty" && (
            <MdRadioButtonUnchecked className="inline-block text-red-500 text-4xl mr-5" />
          )}
          {title === "Warning" && (
            <IoIosWarning className="inline-block text-amber-500 text-4xl mr-5" />
          )}
          {title === "Success" && (
            <MdDoneOutline className="inline-block text-lime-600 text-4xl mr-5" />
          )}{" "}
          {title}
        </Modal.Header>
        <Modal.Body>
          <div>{message}</div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button onClick={() => setOpenModal(false)}>Close</Button>
          <Button
            onClick={() => {
              EmployeeService.removeEmployee(serachId)
                .then((response) => {
                  resetEmployeeData();
                  setShow(false);
                  setMessage(serachId + " පද්ධතියෙන් සාර්ථකව ඉවත් කරන ලදී ");
                  setTitle("Success");
                  setOpenModal(true);
                })
                .catch((e) => {
                  console.log(e);
                });
              setOpenModal(false);
            }}
            style={{ display: show ? "block" : "none" }}
            color="failure"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

export default HRAddEmployee;
