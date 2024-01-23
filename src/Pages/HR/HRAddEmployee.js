import React from "react";
import CollapseBar from "../../Components/UI/CollapseBar";
import {
  FloatingLabel,
  Select,
  Button,
  Datepicker,
  Label,
  Radio,
  TextInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";

function HRAddEmployee() {
  return (
    <main className="flex justify-between">
      <CollapseBar />
      <div className="w-full">
        {/* Personal details starts here */}
        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
            <legend className="text-slate-600">පුද්ගලික තොරතුරු</legend>
            <FloatingLabel variant="filled" label="මුලකුරු සමඟ නම" />
            <FloatingLabel variant="filled" label="සම්පූර්ණ නම" />
            <FloatingLabel variant="filled" label="ස්ථිර ලිපිනය" />
            <FloatingLabel variant="filled" label="ජාතික හැදුනුම්පත් අංකය" />

            <div>
              <span className="m-1 text-slate-500 text-center">
                ස්ත්‍රී / පුරුෂ භාවය
              </span>
              <div className="flex items-center gap-20">
                <div>
                  <Radio id="male" name="gender" value="male" />
                  <Label
                    htmlFor="male"
                    className="text-slate-500 text-base ml-2"
                  >
                    පුරුෂ
                  </Label>
                </div>
                <div>
                  <Radio id="female" name="gender" value="female" />
                  <Label
                    htmlFor="female"
                    className="text-slate-500 text-base ml-2"
                  >
                    ස්ත්‍රී
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <span className="m-1 text-slate-500 text-center">
                සිවිල් තත්වය
              </span>
              <div className="flex items-center gap-20">
                <div>
                  <Radio id="married" name="maritalStatus" value="married" />
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
                    value="unmarried"
                  />
                  <Label
                    htmlFor="unmarried"
                    className="text-slate-500 text-base ml-2"
                  >
                    අවිවාහක
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <span className="m-1 mb-2 text-slate-500 text-center">
                උපන් දිනය
              </span>
              <Datepicker />
            </div>

            <div>
              <span className="m-1 text-slate-500 text-center">
                ජංගම දුරකථන අංකය
              </span>
              <TextInput id="email4" type="email" icon={FaPhone} required />
            </div>

            <div>
              <span className="m-1 text-slate-500 text-center">
                පෞද්ගලික විද්‍යුත් තැපෑල
              </span>
              <TextInput id="email4" type="email" icon={HiMail} required />
            </div>
          </fieldset>
        </div>
        {/* Personlan details ends here */}

        {/* Job details starts here */}

        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
            <legend className="text-slate-600">රැකියාව පිළිබ‌ඳ තොරතුරු</legend>
            <div>
              <span className="m-1 mb-2 text-slate-500 text-center">
                වර්ථමාන සේවා ස්ථානයේ රාජකාරි භාරගත් දිනය
              </span>
              <Datepicker />
            </div>

            <FloatingLabel variant="filled" label="සම්පූර්ණ නම" />
            <FloatingLabel variant="filled" label="ස්ථිර ලිපිනය" />
            <FloatingLabel variant="filled" label="ජාතික හැදුනුම්පත් අංකය" />

            <div>
              <span className="m-1 text-slate-500 text-center">
                ස්ත්‍රී / පුරුෂ භාවය
              </span>
              <div className="flex items-center gap-20">
                <div>
                  <Radio id="male" name="gender" value="male" />
                  <Label
                    htmlFor="male"
                    className="text-slate-500 text-base ml-2"
                  >
                    පුරුෂ
                  </Label>
                </div>
                <div>
                  <Radio id="female" name="gender" value="female" />
                  <Label
                    htmlFor="female"
                    className="text-slate-500 text-base ml-2"
                  >
                    ස්ත්‍රී
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <span className="m-1 text-slate-500 text-center">
                සිවිල් තත්වය
              </span>
              <div className="flex items-center gap-20">
                <div>
                  <Radio id="married" name="maritalStatus" value="married" />
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
                    value="unmarried"
                  />
                  <Label
                    htmlFor="unmarried"
                    className="text-slate-500 text-base ml-2"
                  >
                    අවිවාහක
                  </Label>
                </div>
              </div>
            </div>

           

            <div>
              <span className="m-1 text-slate-500 text-center">
                ජංගම දුරකථන අංකය
              </span>
              <TextInput id="email4" type="email" icon={FaPhone} required />
            </div>

            <div>
              <span className="m-1 text-slate-500 text-center">
                පෞද්ගලික විද්‍යුත් තැපෑල
              </span>
              <TextInput id="email4" type="email" icon={HiMail} required />
            </div>
          </fieldset>
        </div>
        {/* Job details ends here */}





      </div>
    </main>
  );
}

export default HRAddEmployee;
