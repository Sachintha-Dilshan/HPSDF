"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

function HRLeaveStatusTimeLine() {
  const leaveStatus = [
    {
      id: 1,
      time: "1 February 10:30 AM",
      title: "අයදුම් කරු",
      body: "අනියම් නිවාඩු",
      state: "අයදුම් කරන ලදී"
    },
    {
      id: 2,
      time: "1 February 10:30 AM",
      title: "වැඩ බලන නිලධාරි",
      body: "අනියම් නිවාඩු",
      state: "අනුමත කරන ලදී"
    },
    {
      id: 3,
      time: "1 February 10:30 AM",
      title: "අධීක්ෂණ නිලධාරි",
      body: "අනියම් නිවාඩු",
      state: "අනුමත කරන ලදී"
    },
    {
      id: 4,
      time: "1 February 10:30 AM",
      title: "දෙපාර්තමේන්තු ප්‍රධානි",
      body: "අනියම් නිවාඩු",
      state: "සැකෙසෙමින් පවතී"
    }
  ];
  return (
    <Timeline horizontal>
      {leaveStatus.map((status) => {
        return (
          <Timeline.Item key={status.id}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>{status.time}</Timeline.Time>
              <Timeline.Title className="font-medium">{status.title}</Timeline.Title>
              <Timeline.Body>{status.body}</Timeline.Body>
              <Button color="gray">
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
