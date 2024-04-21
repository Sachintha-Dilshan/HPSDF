"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import FormattedDate from "./hr-date-converter";

function HRLeaveStatusTimeLine(props) {
  const leaveStatus = [
    {
      id: 1,
      time: <FormattedDate dateString={props.data[1]} />,
      title: "අයදුම් කරු",
      body: props.data[0],
      state: "අයදුම් කරන ලදී"
    },
    {
      id: 2,
      time: <FormattedDate dateString={props.data[4]} />,
      title: "වැඩ බලන නිලධාරි",
      body: props.data[2],
      state: props.data[3] === 0 ? "සැකසෙමින් පවතී" : (props.data[2] === 1 ? "අනුමත කරන ලදී" : "ප්‍රතික්ෂේප කරන ලදී")
    },
    {
      id: 3,
      time: <FormattedDate dateString={props.data[7]} />,
      title: "අධීක්ෂණ නිලධාරි",
      body: props.data[5],
      state: props.data[6] === 0 ? "සැකසෙමින් පවතී" : (props.data[6] === 1 ? "අනුමත කරන ලදී" : "ප්‍රතික්ෂේප කරන ලදී")

    },
    {
      id: 4,
      time: <FormattedDate dateString={props.data[10]} />,
      title: "දෙපාර්තමේන්තු ප්‍රධානි",
      body: props.data[8],
      state: props.data[9] === 0 ? "සැකසෙමින් පවතී" : (props.data[9] === 1 ? "අනුමත කරන ලදී" : "ප්‍රතික්ෂේප කරන ලදී")
    }
  ];
  return (
    <Timeline horizontal>
      {leaveStatus.map((status) => {
        return (
          <Timeline.Item key={status.id}>
            <Timeline.Point icon={HiCalendar} className="m-5"/>
            <Timeline.Content>
              <Timeline.Time >{status.time}</Timeline.Time>
              <Timeline.Title className="font-medium">{status.title}</Timeline.Title>
              <Timeline.Body>{status.body}</Timeline.Body> 
              <Timeline.Body>{props.title}</Timeline.Body>
              <Button color="gray" className={status.state === "සැකසෙමින් පවතී" ? "bg-orange-400" : (status.state === "ප්‍රතික්ෂේප කරන ලදී" ? "bg-red-500" : "bg-green-400")}>
              {status.state}
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}

export default HRLeaveStatusTimeLine;
