import React from "react";
import CollapseBar from "../../layouts/collapse-bar";

import {
  FloatingLabel,
  Select,
  Datepicker,
  Label,
  Radio,
  TextInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";

function HRAddEmployee() {
  return (
    <main>
      <CollapseBar />
      <div className="flex flex-col  gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
          Add New Employee
        </h3>
        {/* Personal details starts here */}
        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid lg:grid-cols-3 p-5 gap-5 m-5">
            <legend className="text-slate-600">පුද්ගලික තොරතුරු</legend>
            <FloatingLabel variant="filled" label="මුලකුරු සමඟ නම" />
            <FloatingLabel variant="filled" label="සම්පූර්ණ නම" />
            <FloatingLabel variant="filled" label="ස්ථිර ලිපිනය" />
            <FloatingLabel variant="filled" label="ජාතික හැදුනුම්පත් අංකය" />

            <div className="flex items-center md:gap-20 md:justify-center justify-between">
              <div>
                <Radio id="male" name="gender" value="male" />
                <Label htmlFor="male" className="text-slate-500 text-base ml-2">
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

            <div className="flex items-center md:gap-20 md:justify-center justify-between">
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
                <Radio id="unmarried" name="maritalStatus" value="unmarried" />
                <Label
                  htmlFor="unmarried"
                  className="text-slate-500 text-base ml-2"
                >
                  අවිවාහක
                </Label>
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

            <div>
              <Label
                htmlFor="designation"
                value="තනතුර"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              />
              <Select id="designation" required>
                <option>-----Select-----</option>
                <option>සභාපති</option>
                <option>ලේකම්</option>
                <option>කළමණාකරණ සේවා නිලධාරී</option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="segment"
                value="තනතුර අයත් වන සේවා කාණ්ඩය"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              />
              <Select id="segment" required>
                <option>-----Select-----</option>
                <option>පළාත් රාජ්‍ය සේවය</option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="class"
                value="තනතුර අයත් වන පන්තිය"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              />
              <Select id="class" required>
                <option>-----Select-----</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="grade"
                value="තනතුර අයත් වන ශ්‍රේණිය"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              />
              <Select id="grade" required>
                <option>-----Select-----</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
              </Select>
            </div>

            <div>
              <span className="m-1 mb-2 text-slate-500 text-center">
                මුල් පත්වීම් දිනය
              </span>
              <Datepicker />
            </div>

            <div>
              <span className="m-1 mb-2 text-slate-500 text-center">
                මුල් පත්වීම අනුව රාජකාරි භාරගත් දිනය
              </span>
              <Datepicker />
            </div>

            <div className="flex items-center md:gap-20 md:justify-center justify-between">
              <div>
                <Radio id="permanant" name="permanant" value="permanant" />
                <Label
                  htmlFor="permanant"
                  className="text-slate-500 text-base ml-2"
                >
                  පත්වීම ස්ථීරයි
                </Label>
              </div>
              <div>
                <Radio
                  id="notPermanant"
                  name="permanant"
                  value="notPermanant"
                />
                <Label
                  htmlFor="notPermanant"
                  className="text-slate-500 text-base ml-2"
                >
                  පත්වීම ස්ථීර නැත
                </Label>
              </div>
            </div>

            <div>
              <span className="m-1 mb-2 text-slate-500 text-center">
                සේවය ස්ථීර කල දිනය
              </span>
              <Datepicker />
            </div>

            <FloatingLabel variant="filled" label="වැටුප් වර්ධක දිනය" />
            <FloatingLabel variant="filled" label="වැටුප් කේතය" />
            <FloatingLabel variant="filled" label="වැ.අ.වි.වැ අංකය" />
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
                value="අංශය"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              />
              <Select id="section" required>
                <option>-----Select-----</option>
                <option>ආයතන හා පාලන අංශය</option>
                <option>ආදායම් අංශය</option>
                <option>ගිණුම් අංශය</option>
                <option>කර්මාන්ත අංශය අංශය</option>
                <option>පරිසර අංශය</option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="subjectId"
                value="විෂය අංකය"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              />
              <Select id="subjectId" required>
                <option>-----Select-----</option>
                <option>02/01</option>
                <option>02/02</option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="assignedDate"
                value="අදාල අංශයෙහි වැඩ භාරගත් දිනය"
                className="m-1 mb-2 text-slate-500 text-center text-base"
              />
              <Datepicker id="assignedData" />
            </div>

            <FloatingLabel variant="filled" label="නිවාඩු අංකය" />
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
    </main>
  );
}

export default HRAddEmployee;
