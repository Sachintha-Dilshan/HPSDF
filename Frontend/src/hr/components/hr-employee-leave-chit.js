import React from "react";
import { FloatingLabel } from "flowbite-react";

function HREmployeeLeaveChit() {
  const leaveData = [
    "අනියම් නිවාඩු",
    "03",
    "2024-02-05",
    "2024-02-08",
    "එම්.එස්.හිරිමුතුගොඩ මිය",
    "පෞද්ගලික හේතුවකි",
  ];
  const labels = [
    "නිවාඩු වර්ගය",
    "නිවාඩු ඉල්ලා සිටින දින ගණන",
    "නිවාඩු පටන් ගන්නා දිනය",
    "නැවත සේවයට පැමිණෙන දිනය",
    "වැඩ බලන නිලධාරි",
    "නිවාඩු ඉල්ලීමට හේතු"
  ];
  return(
    <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
    <legend className="text-slate-600">නිවාඩු අයදුම්පත</legend>
    {leaveData.map((data, index) => (
      <FloatingLabel
        key={labels[index]} // Assuming each label corresponds to the data at the same index
        variant="filled"
        label={labels[index]}
        value={data}
        disabled={true}
      />
    ))}
  </fieldset>
  );
}

export default HREmployeeLeaveChit;
