import React from "react";
import { useLocation, Outlet, useParams } from "react-router-dom";
import PageTitle from "./PageTitle";
import { scheduleData } from "../schedule/scheduleData";
import TeamData from "../TeamPart/TeamData";

const PageTitleWrapper = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  // Exclude paths where title should NOT appear
  const excludedPages = ["/", "/search", "/404"];

  if (excludedPages.includes(pathname)) return <Outlet />;

  // Use 'let' so we can reassign for event-detail pages
  let title = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .toUpperCase();

  if (pathname.startsWith("/event-detail") && id) {
    const lecture = scheduleData
      .flatMap((day) => day.lectures)
      .find((lec) => lec.id.toString() === id);
    // console.log(lecture);

    if (lecture) {
      title = lecture.topic.toUpperCase();
    }
  }

  if (pathname.startsWith("/speaker-detail") && id) {
    const speaker = TeamData.find((speak) => speak.id.toString() === id);

    if (speaker) {
      title = speaker.name.toUpperCase();
    }
  }

  return (
    <>
      {title && <PageTitle title={title} />}
      <Outlet />
    </>
  );
};

export default PageTitleWrapper;
