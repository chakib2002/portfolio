import React, { useEffect, useState } from "react";
import Job from "./Job";
import JobTask from "../../components/ExperiencePage/JobTask";
import style from "../../styles/Page.module.css";

export default function Section({
  companies,
  setSelected,
  selected,
  jobsArray,
}) {
  const [roles, setRoles] = useState({
    title: "Engineer",
    dateRange: "April 2021 - February 2022",
    company: "Yassir",
    Tasks: [
      "Full stack engineer member with Yassir Express development team.",
      "Developed and maintained major features for Yassir Express Mobile App.",
      "Interfaced with ux/ui designers and other developers to ensure thoughtful and coherent user experiences across Yassir's iOS and Android mobile apps.",
      "Communicate with different teams of engineers, designers and Managers on a daily basis. "
    ],
  });

  const handleJobsArray = () => {
    jobsArray?.map(
      (element) => element.company == selected && setRoles(element)
    );
  };
  useEffect(() => {
    handleJobsArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-center"
      className={` md:h-60 grid space-y-5 md:grid md:grid-flow-col md:space-y-0 md:space-x-8 lg:w-[600px] mx-5 lg:mx-auto`}
    >
      <div className="">
        <Job
          companies={companies}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <JobTask
        selected={selected}
        company={roles.company}
        dateRange={roles.dateRange}
        jobDetails={roles.Tasks}
        title={roles.title}
      />
    </div>
  );
}
