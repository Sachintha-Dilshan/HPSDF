import React from "react";
import { FloatingLabel } from "flowbite-react";

function HREmployeePersonalData() {
  const employeeData = [
    "එම්.එස්.හිරිමුතුගොඩ",
    "මැණිකා සංජීවනී හිරිමුතුගොඩ",
    "බැඹරැන්දෙගෙදර, පාසල් මාවත, කිරින්ද, පුහුල් වත්ත",
    "796283394V",
    "1979-05-07",
    "ස්ත්‍රී",
    "විවාහක",
    "0711238467",
    "hirimuthu@gmail.com",
  ];
  const labels = [
    "මුලකුරු සම‌ඟ නම",
    "සම්පූර්ණ නම",
    "ස්ථිර ලිපිනය",
    "ජාතික හැදුනුම්පත් අංකය",
    "උපන් දිනය",
    "ස්ත්‍රී / පුරුෂ භාවය",
    "සිවිල් තත්වය",
    "ජංගම දුරකථන අංකය",
    "පෞද්ගලික විද්‍යුත් තැපෑල",
  ];
  return(
    <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
    <legend className="text-slate-600">පුද්ගලික තොරතුරු</legend>
    {employeeData.map((employee, index) => (
      <FloatingLabel
        key={labels[index]} // Assuming each label corresponds to the data at the same index
        variant="filled"
        label={labels[index]}
        value={employee}
        disabled={true}
      />
    ))}
  </fieldset>
  );
}

export default HREmployeePersonalData;
